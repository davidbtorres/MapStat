import { GeoJSON } from "react-leaflet";
import worldData from "../../data/world.geo.json";
import costOfLiving from "../../data/costOfLiving";
import { getCountryColor } from "../../utils/colorScale";

export default function CountriesLayer() {
  function style(feature: any) {
    const code = feature.properties.iso_a3;
    const value = costOfLiving[code];

    return {
      fillColor: getCountryColor(value),
      weight: 1,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
    };
  }

  function onEachCountry(feature: any, layer: any) {
    const code = feature.properties.iso_a3;
    const name = feature.properties.name_en;
    const value = costOfLiving[code];

    layer.bindPopup(`
      <strong>${name}</strong><br/>
      Cost of Living: ${value ?? "No Data"}
    `);
  }
  return (
    <GeoJSON
      data={worldData as any}
      style={style}
      onEachFeature={onEachCountry}
    />
  );
}
