import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  Polyline,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import marker_icon from "../../assets/marker.svg";
const customIcon = L.icon({
  iconUrl: marker_icon,
  iconSize: [32, 32],
});

const Map = ({ setPos, setStreet }) => {
  const [position, setPosition] = useState(null);
  function getAddress(lat, lng) {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setStreet(data.address.road)
        console.log(data.address.road);
      })
      .catch(error => console.log(error));
  }
  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    const newPosition = [lat, lng];
    setPosition(newPosition);
    getAddress(lat, lng)
    setPos(newPosition)
  };

  const LocationMarker = () => {
    useMapEvents({
      click: handleMapClick,
    });
    if (position) {
      return <Marker position={position} icon={customIcon} />;
    }
    return null;
  };

  return (
    <MapContainer
      center={[42.8746, 74.5698]}
      zoom={13}
      style={{ height: "400px", width: "400px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LocationMarker />
    </MapContainer>
  );
};

export default Map;
