/*global L*/
function Map() {
  return {
    restrict: 'A',
    link($scope, $element) {
      const domElement = $element[0];
      const map = L.map(domElement);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
      }).addTo(map);
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const makerLocation = [position.coords.latitude, position.coords.longitude];
          const marker =L.marker(makerLocation)
            .addTo(map);
          marker.bindPopup('<p>You are here!</p>');
        });
      }
    }};
}
export default Map;
