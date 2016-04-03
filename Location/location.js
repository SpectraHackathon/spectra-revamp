// For location initializing
var hackathonCenter = new google.maps.LatLng(37.3885531,-122.0766911);

function initialize() {
  var mapProp = {
    center:hackathonCenter,
    zoom:9,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
        
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

  var marker = new google.maps.Marker(
    {
      position:hackathonCenter,
    });
  marker.setMap(map);

  var infowindow = new google.maps.InfoWindow(
    {
      content:"Silicon Valley, Exact Location: TBA"
    });
  infowindow.open(map,marker);
}        

google.maps.event.addDomListener(window, 'load', initialize);