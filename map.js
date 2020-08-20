/**
 * Moves the map to display over Boston using viewBounds
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function setMapViewBounds(map){
  var bbox = new H.geo.Rect(42.3736,-71.0751,42.3472,-71.0408);
  map.getViewModel().setLookAtData({
    bounds: bbox
  });
}

/**
 * Boilerplate map initialization code starts below:
 */

//Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
var platform = new H.service.Platform({
  apikey: "3wbX1-4-hiUtzWi3K-48hrY784nkb-LwXZoxxJpllqs"
});
var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById('mapArea'),
  defaultLayers.vector.normal.map,{
  center: {lat:50, lng:5},
  zoom: 4,
  pixelRatio: window.devicePixelRatio || 1
});
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...
window.onload = function () {
  setMapViewBounds(map);
}


$("#searchBtn").on("click", function (city) {
  event.preventDefault();
  let cityString = $("#city").val();
  getLatLon(cityString);
});
function getLatLon(burrito) {
  console.log(city)
  let queryURL = apiCall + burrito + "&appid=" + apiKey
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response)
    let latitude = response.coord.lat
    let longitude = response.coord.lon
    console.log(latitude)
    console.log(longitude)
    nasaAPI(latitude, longitude)
  })
}

let apiKey = "93b75b830f3da96083a3b6252ba8705b"; //API KEY
let apiCall = "http://api.openweathermap.org/data/2.5/weather?q="; //API CALL BASED ON CITY NAME
let apiCallLatLon = "http://api.openweathermap.org/data/2.5/uvi?appid="; //API CALL BASED ON LATITUDE AND LONGITUDE