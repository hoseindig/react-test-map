import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Import the custom marker image
import customMarkerIcon from "./icon/marker.png";

const MapComponent = () => {
  const initialMarkers = [
    { id: 1, latitude: 35.702, longitude: 51.336 },
    // Add more initial markers here if needed
  ];

  // State to hold the markers' positions
  const [markers, setMarkers] = useState(initialMarkers);

  // Create a custom icon using the customMarkerIcon
  const customIcon = new L.Icon({
    iconUrl: customMarkerIcon,
    iconSize: [32, 32], // Set the width and height of your custom icon
    iconAnchor: [16, 32], // Set the anchor point of your custom icon
  });

  // Function to handle adding a new marker
  const addNewMarker = (e) => {
    console.log(e);
    console.log(e.latlng);
    const newMarker = {
      id: markers.length + 1,
      latitude: e.latlng.lat,
      longitude: e.latlng.lng,
    };

    //// Update the markers state with the new marker
    setMarkers([...markers, newMarker]);
  };

  const addNewMarkerFromButton = () => {
    console.log("addNewMarkerFromButton");
    const newMarker = {
      id: markers.length + 1,
      latitude: 35.701, // Set the initial latitude for the new marker
      longitude: 51.391, // Set the initial longitude for the new marker
    };

    // Update the markers state with the new marker
    setMarkers([...markers, newMarker]);
  };

  return (
    <>
      <MapContainer
        onClick={addNewMarker}
        center={[35.702, 51.336]} // Set an initial center for the map
        zoom={16}
        style={{ width: "100%", height: "400px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Render all markers */}
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={[marker.latitude, marker.longitude]}
            icon={customIcon}
          >
            <Popup>Popup content for Marker {marker.id}</Popup>
          </Marker>
        ))}
      </MapContainer>
      {/* <button onClick={addNewMarker}>new marker</button> */}
      <button onClick={addNewMarkerFromButton}>Add New Marker</button>
    </>
  );
};

export default MapComponent;
