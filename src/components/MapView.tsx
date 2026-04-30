import { MapContainer, TileLayer } from "react-leaflet";

import CountriesLayer from "./layers/CountriesLayer";
import CitiesLayer from "./layers/CitiesLayer";

type Props = {
  mode: "countries" | "cities";
};

export default function MapView({ mode }: Props) {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* <GeoJSON
        data={worldData as any}
        style={style}
        onEachFeature={onEachCountry}
      /> */}
      {mode === "countries" && <CountriesLayer />}
      {mode === "cities" && <CitiesLayer />}
    </MapContainer>
  );
}
