import React, { useState, useEffect } from 'react';
import { MapContainer as LeafletMap, TileLayer, Marker, Popup, useMap, LayerGroup, Circle } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import Icon from "./danger.png";
import MarkerClusterGroup from 'react-leaflet-cluster';
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch';
import "./style.css";

// Search box implementation with using leafleft-geosearch library
function Search(props) {
    const map = useMap(); 
    const { provider } = props;

    useEffect(() => {
        const searchControl = new GeoSearchControl({
            provider,
        });

        map.addControl(searchControl); 
        return () => map.removeControl(searchControl);
    }, [map, provider]);

    return null;
}




function MapComponent() {
    const [crimeData, setCrimeData] = useState([]);
    const [selectedBorough, setSelectedBorough] = useState(""); // State to store selected borough
    const [mapCenter, setMapCenter] = useState([51.5072, -0.1278]); // Initial map center

    // Custom Icon for the markers 
    const customIcon = L.icon({
        iconUrl: Icon,
        iconSize: [25, 25],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76]
    });

    // Borough data with name, latitude, and longitude
    const boroughs = [
        { name: "Camden", latitude: 51.5290, longitude: -0.1255 },
        { name: "Greenwich", latitude: 51.4892, longitude: 0.0648 },
        { name: "Hackney", latitude: 51.5450, longitude: -0.0553 },
        { name: "Hammersmith and Fulham", latitude: 51.4927, longitude: -0.2339 },
        { name: "Islington", latitude: 51.5416, longitude: -0.1022 },
        { name: "Kensington and Chelsea", latitude: 51.5020, longitude: -0.1947 },
        { name: "Lambeth", latitude: 51.4607, longitude: -0.1163 },
        { name: "Southwark", latitude: 51.5035, longitude: -0.0804 },
        { name: "Tower Hamlets", latitude: 51.5099, longitude: -0.0059 },
        { name: "Wandsworth", latitude: 51.4567, longitude: -0.1910 },
        { name: "Westminster", latitude: 51.4973, longitude: -0.1372 }
    ];

    // Fetching data from Police API
    useEffect(() => {
        if (selectedBorough) { // Fetch data only if a borough is selected
            const borough = boroughs.find(b => b.name === selectedBorough);
            const apiUrl = `https://data.police.uk/api/crimes-street/theft-from-the-person?lat=${borough.latitude}&lng=${borough.longitude}`;
            
            // Fetch crime data for the selected borough
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => setCrimeData(data))
                .catch(error => console.error('Error fetching crime data:', error));

            // Updating map center based on selected borough
            setMapCenter([borough.latitude, borough.longitude]);
        }
    }, [selectedBorough]);

    // Function to handle borough selection
    const handleBoroughChange = (event) => {
        setSelectedBorough(event.target.value);
    };

    // Function to handle clicking on a borough popup
    const handlePopupClick = (boroughName) => {
        setSelectedBorough(boroughName);
    };

    return (
        <div className='container'>
            <div className="header">                
                <h2 className='text mt-4'>London Street Theft Incidents </h2>
                <p className="text-muted mt-4">Guardian Street Mapper is a web application that provides users with insights into theft incidents in central London over the last month. With an alarming 703% increase in theft incidents, our application aims to shed light on this serious problem. On average, there are 3242 thefts per month in the area. Users can explore the map to see the distribution of theft incidents across different areas and streets, helping them stay informed and aware of their surroundings.</p>
            </div>
            <div className="map-and-dropdown">
                <div className="dropdown">
                    <select value={selectedBorough} onChange={handleBoroughChange}>
                        <option value="">Select Borough</option>
                        {boroughs.map(borough => (
                            <option key={borough.name} value={borough.name}>{borough.name}</option>
                        ))}
                    </select>
                </div>
                <LeafletMap className="map-container" center={mapCenter} zoom={11}>
                    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <MarkerClusterGroup>
                        {crimeData.map(crime => (
                            <Marker
                                key={crime.id}
                                position={[parseFloat(crime.location.latitude), parseFloat(crime.location.longitude)]}
                                icon={customIcon}> 
                                 <Popup>
                                    {crime.location.street.name}
                                </Popup>                       
                            </Marker>
                        ))}
                    </MarkerClusterGroup>
                    <Search provider={new OpenStreetMapProvider()} />
                    {boroughs.map(borough => (
                        <LayerGroup key={borough.name}>
                            <Circle center={[borough.latitude, borough.longitude]} radius={1000}>
                                <Popup onClick={() => handlePopupClick(borough.name)}>
                                    {borough.name}
                                </Popup>
                            </Circle>
                        </LayerGroup>
                    ))}
                </LeafletMap>
            </div>
        </div>
    );
}

export default MapComponent;
