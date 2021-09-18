// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat:51.5457 , lng:0.1437 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
