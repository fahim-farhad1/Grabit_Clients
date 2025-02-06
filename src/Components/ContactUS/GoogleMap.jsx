import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// কাস্টম লোকেশনের Latitude & Longitude সেট করা
const customLocation = [23.753895280438545, 90.36217797296278]; // Example: Dhaka, Bangladesh

const GoogleMap = () => {
  // Fix Leaflet icon paths (required for v4.x)
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
  });

  return (
    <MapContainer
      center={customLocation} // কাস্টম লোকেশন
      zoom={20}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={customLocation}>
        <Popup>House 15, Sher_E Bangla Road</Popup>
      </Marker>
    </MapContainer>
  );
};

export default GoogleMap;
