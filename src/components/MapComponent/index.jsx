import React, { useState, useEffect } from 'react';
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import icon from "./danger.png";
import "./style.css";
import MarkerClusterGroup from 'react-leaflet-cluster';


function MapComponent() {
    const [crimeData, setCrimeData] = useState([]);
    const customIcon = L.icon({
        iconUrl: icon,
        iconSize: [38, 38],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76]
    });

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
                <h2 className='text mt-4'>Theft Incidents and Police Stations</h2>
                <p className="text-muted mt-2">A web map displaying the theft incidents within London. The user can also find the nearest Police Station on their
                    location.</p>
            </div>
            <LeafletMap className="map-container" center={[51.5072, -0.1278]} zoom={13}>
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <MarkerClusterGroup>
                    {crimeData.map(crime => (
                        <Marker
                            key={crime.id}
                            position={[parseFloat(crime.location.latitude), parseFloat(crime.location.longitude)]}
                            icon={customIcon}
                        >
                            {/* You can add Popup here if needed */}
                        </Marker>
                    ))}
                </MarkerClusterGroup>
            </LeafletMap>
        </div>
    );
}

export default MapComponent;