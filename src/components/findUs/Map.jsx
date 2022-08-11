import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import useFetch from "../../hooks/useFetch";

const endPoint = "api/find-us";

const Map = () => {
  const { loading, err, data } = useFetch(
    `${import.meta.env.VITE_API_URL}/${endPoint}`
  );

  if (data) {
    const lat = data.data.attributes.lat;
    const lon = data.data.attributes.lon;

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
  }
};

export default Map;
