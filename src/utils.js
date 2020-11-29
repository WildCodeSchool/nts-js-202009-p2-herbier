function toRadian(degree) {
  return (degree * Math.PI) / 180;
}

const calcDistance = function (position, coord) {
  if (!position || !coord) {
    return null;
  }
  const lng1 = toRadian(position[1]);
  const lat1 = toRadian(position[0]);
  const lng2 = toRadian(coord[1]);
  const lat2 = toRadian(coord[0]);

  const deltaLat = lat2 - lat1;
  const deltaLng = lng2 - lng1;

  const a =
    Math.pow(Math.sin(deltaLat / 2), 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLng / 2), 2);

  const c = 2 * Math.asin(Math.sqrt(a));
  const EARTH_RADIUS = 6371;
  return c * EARTH_RADIUS;
};

export { calcDistance };
