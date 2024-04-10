import React from "react";
import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Box } from "@mui/material";

const Map = () => {
  return (
    <Box mt={"60px"} mb={"40px"} style={{ width: "1150px", height: "616px" }}>
      <MapContainer
        center={[47.9221, 106.9155, 10]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[47.9221, 106.9155]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};
export default Map;
