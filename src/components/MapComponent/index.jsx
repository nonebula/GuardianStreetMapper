import React, { useState, useEffect } from 'react';
import { MapContainer as LeafletMap, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import Icon from "./danger.png";
import "./style.css";
import MarkerClusterGroup from 'react-leaflet-cluster';
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch';



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

    return null; // 
}


function MapComponent() {
    const [crimeData, setCrimeData] = useState([]);


    //Custom Icon for the markers 
    const customIcon = L.icon({
        iconUrl: Icon,
        iconSize: [25, 25],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76]
    });


    // Fetching data from Police API
    useEffect(() => {
        // Fetch crime data
        fetch('https://data.police.uk/api/crimes-street/theft-from-the-person?lat=51.5074&lng=-0.1278')
            .then(response => response.json())
            .then(data => setCrimeData(data))
            .catch(error => console.error('Error fetching crime data:', error));
    }, []);




    return (
        <div className='container'>
            <div className="header">                
                <h2 className='text mt-4'>London Street Theft Incidents </h2>
                <p className="text-muted mt-4">Guardian Street Mapper is a web application that provides users with insights into theft incidents in central London over the last month. With an alarming 703% increase in theft incidents, our application aims to shed light on this serious problem. On average, there are 3702 thefts per month in the area. Users can explore the map to see the distribution of theft incidents across different areas and streets, helping them stay informed and aware of their surroundings.</p>
            </div>
            <LeafletMap className="map-container" center={[51.5072, -0.1278]} zoom={15}>
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
            </LeafletMap>
        </div>
    );
}

export default MapComponent;


