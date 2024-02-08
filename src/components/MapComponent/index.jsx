import React from 'react';
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import { Component } from 'react';
import "./style.css";


function MapComponent() {
    // Custom icon 
    const customIcon = L.icon({
        iconUrl: './danger.png',
        iconSize: [38, 38],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76]
    });

    // onClick Marker 
    const handleMapClick = (e) => {
        setPosition([e.latlng.lat, e.latlng.lng]);
      };

    const markers = [
        { position: [51.5072, 0.1276] }
    ];

    return (
        <LeafletMap className="map-container" center={[51.5072, 0.1276]} zoom={13}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
                       url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {markers.map((marker, index) => (
                <Marker key={index} position={marker.position} onClick={handleMapClick} icon={customIcon} draggable={true} />
            ))}
        </LeafletMap>
    );
}

export default MapComponent;