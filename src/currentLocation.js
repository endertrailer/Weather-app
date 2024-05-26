let location = 'nagpur';

// eslint-disable-next-line require-jsdoc
export default function currentLocation(place) {
  if (place) {
    location = place;
  }
  return location;
}
