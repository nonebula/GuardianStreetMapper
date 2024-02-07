import React from 'react';
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
<<<<<<< HEAD
=======
import "./style.css";
>>>>>>> 986c9da4bc1f34d259a2a493074897ed709a11e6
import { Component } from 'react';
import styles from "./MapComponent.module.css"

function MapComponent() {
    // Custom icon 
    const customIcon = L.icon({
        iconUrl: './danger.png',
        iconSize: [38, 38],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76]
    });

    // onClick Marker 
<<<<<<< HEAD
    const handleClick = event => {
        const { lat, lng } = event.latlng;
        console.log(`Accident at ${lat}, ${lng}`);
    };
=======
    const handleMapClick = (e) => {
        setPosition([e.latlng.lat, e.latlng.lng]);
      };
>>>>>>> 986c9da4bc1f34d259a2a493074897ed709a11e6

    const markers = [
        { position: [51.5072, 0.1276] }
    ];

    return (
        <LeafletMap className="map-container" center={[51.5072, 0.1276]} zoom={13}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
                       url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {markers.map((marker, index) => (
<<<<<<< HEAD
                <Marker key={index} position={marker.position} onClick={handleClick} icon={customIcon} draggable={true} />
=======
                <Marker key={index} position={marker.position} onClick={handleMapClick} icon={customIcon} draggable={true} />
>>>>>>> 986c9da4bc1f34d259a2a493074897ed709a11e6
            ))}
        </LeafletMap>
    );
}

export default MapComponent;