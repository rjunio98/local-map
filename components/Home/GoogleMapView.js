import { UserLocationContext } from "@/context/UserLocationContext";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import React, { useContext } from "react";
import Markers from "./Markers";

function GoogleMapView({ businessList }) {
  const { userLocation, setUserLocation } = useContext(UserLocationContext);

  const containerStyle = {
    width: "100%",
    height: "70vh",
  };

  const cordinate = {
    lat: -34.397,
    lng: 150.644,
  };

  return (
    <div>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={userLocation}
          zoom={12}
        >
          <MarkerF
            position={userLocation}
            icon={{
              url: "/user-location.png",
              scaledSize: { width: 50, height: 50 },
            }}
          />
          {businessList.map(
            (item, index) =>
              index <= 7 && (
                <Markers
                  business={item}
                  key={index}
                />
              )
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default GoogleMapView;
