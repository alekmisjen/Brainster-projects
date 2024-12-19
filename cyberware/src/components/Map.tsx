import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Set the container size for the map
const containerStyle = {
  width: "100%",
  height: "150px",
};

// Define the center of the map
const center = {
  lat: 40.7128, // Latitude for New York City
  lng: -74.006, // Longitude for New York City
};

export const Map = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDUktlXQjfQtJU6_CxRixjRutx5jpmRb0I">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Add a Marker */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};
