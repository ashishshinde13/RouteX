import { MapContainer, TileLayer } from "react-leaflet";
import RouteLayer from "./RouteLayer.jsx";

const defaultCenter = [40.7128, -74.006];

export default function MapView({ route }) {
  return (
    <section aria-label="Map" className="overflow-hidden rounded-xl shadow-sm">
      <MapContainer center={defaultCenter} zoom={12} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <RouteLayer coordinates={route?.coordinates ?? []} />
      </MapContainer>
    </section>
  );
}
