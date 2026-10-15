import { Polyline } from "react-leaflet";

export default function RouteLayer({ coordinates }) {
  if (!coordinates.length) return null;
  return <Polyline positions={coordinates} pathOptions={{ color: "#1d4ed8", weight: 5 }} />;
}
