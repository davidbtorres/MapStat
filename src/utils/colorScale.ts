export function getCountryColor(value?: number): string {
  if (value === undefined) return "#cccccc";

  if (value > 75) return "#800026";
  if (value > 65) return "#BD0026";
  if (value > 55) return "#E31A1C";
  if (value > 45) return "#FC4E2A";
  if (value > 35) return "#FD8D3C";
  if (value > 25) return "#FEB24C";

  return "#FED976";
}
