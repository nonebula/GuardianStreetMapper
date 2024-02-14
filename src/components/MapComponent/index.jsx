import { useState, useEffect } from 'react';
import { MapContainer as LeafletMap, TileLayer, Marker, Popup, useMap, GeoJSON } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import Icon from "./danger.png";
import MarkerClusterGroup from 'react-leaflet-cluster';
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch';
import "./style.css";
import boroughsData from "./data/boroughs.json";

function Search(props) {
    const map = useMap(); 
    // eslint-disable-next-line react/prop-types
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
    const [selectedBorough, setSelectedBorough] = useState("");

    const customIcon = L.icon({
        iconUrl: Icon,
        iconSize: [25, 25],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76]
    });

    useEffect(() => {
        if (selectedBorough) {
            const borough = boroughsData.features.find(b => b.properties.name === selectedBorough);
            const apiUrl = `https://data.police.uk/api/crimes-street/theft-from-the-person?lat=${borough.properties.latitude}&lng=${borough.properties.longitude}`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => setCrimeData(data))
                .catch(error => console.error('Error fetching crime data:', error));
        }
    }, [selectedBorough]);

    const handleBoroughChange = (event) => {
        setSelectedBorough(event.target.value);
    };

    const handlePopupClick = (boroughName) => {
        setSelectedBorough(boroughName);
    };

    return (
        <div className='container'>
            <div className="header">                
                <h2 className='text mt-4'>London Street Theft Incidents </h2>
                <p className="text-muted mt-4">Guardian Street Mapper is a web application that provides users with insights into theft incidents in central London over the last month. With an alarming 703% increase in theft incidents, our application aims to shed light on this serious problem. On average, there are 3242 thefts per month in the area. Users can explore the map to see the distribution of theft incidents across different areas and streets, helping them stay informed and aware of their surroundings.</p>
                <p className="text-muted mt-3">Please click on or select from the dropdown menu the borough to view theft crime incidents. Zoom in to see the streets, and click on the marker to see the name of the street where the incident occurred. Alternatively, you can enter an address to view incidents. </p>
            </div>
            <div className="map-and-dropdown">
                <div className="dropdown">
                    <select value={selectedBorough} onChange={handleBoroughChange}>
                        <option value="">Select Borough</option>
                        {boroughsData.features.map(borough => (
                            <option key={borough.properties.name} value={borough.properties.name}>{borough.properties.name}</option>
                        ))}
                    </select>
                </div>
                <LeafletMap className="map-container" center={[51.5072, -0.1278]} zoom={11}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
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
                    <GeoJSON 
                     data={boroughsData.features}
                     style={() => ({
                     color: "#2d50a3", 
                   weight: 2, 
                  opacity: 1, 
                })}
              autoPan={false}
                 onEachFeature={(feature, layer) => {
              layer.bindPopup(feature.properties.name);
        layer.on('click', function () {
            handlePopupClick(feature.properties.name);
        });
    }}
/>

                </LeafletMap>
            </div>
        </div>
    );
}

export default MapComponent;


