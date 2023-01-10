import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { useSelector } from "react-redux";

export default function MyMap() {
  const latLng = useSelector((state) => state.displayData.latLng);
  const [cordinates, setCordinates] = useState([10, 10]);
  const MyCustomMarker = () => <span class="material-icons">place</span>;

  useEffect(() => {
    setCordinates([+latLng?.lat, +latLng?.lng]);
  }, [latLng]);
  return (
    <div style={{ height: "70vh", width: "70%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        key={new Date().getTime()}
        defaultZoom={5}
        yesIWantToUseGoogleMapApiInternals={true}
        center={cordinates}
      >
        <MyCustomMarker lat={cordinates[0]} lng={cordinates[1]} />
      </GoogleMapReact>
    </div>
  );
}
