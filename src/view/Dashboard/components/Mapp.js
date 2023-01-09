import React from "react";
import GoogleMapReact from "google-map-react";

export default function MyMap({ latLng }) {
  const defaultProps = {
    center: {
      lat: latLng?.lat,
      lng: latLng?.lng,
    },
    zoom: 2,
  };
  return (
    <div style={{ height: "70vh", width: "70%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
}
