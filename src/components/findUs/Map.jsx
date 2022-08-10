import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const lat = 59.912389;
const lon = 10.741289;

const Map = () => {
  return (
    <MapContainer center={[lat, lon]} zoom={14} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lon]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
