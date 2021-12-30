import React from "react";
import GoogleMapReact from "google-map-react"

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function TestMap({location}) {

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA9PR6C6bc_iZPhn0Xkf4tCB6-aepEpiWQ" }}
        center={location.center}
        zoom={location.zoom}
      >
        <AnyReactComponent lat={location.center.lat} lng={location.center.lng} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
