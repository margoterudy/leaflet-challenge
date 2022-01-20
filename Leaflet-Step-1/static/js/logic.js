// Define earthquakes plates GeoJSON url variable
var earthquakesURLoneday = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_day.geojson";

// Create earthquake layerGroup
var earthquakes = L.layerGroup();

// Create tile layer
var grayscaleMap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/light-v10",
  accessToken: API_KEY
});

// Create the map, giving it the grayscaleMap and earthquakes layers to display on load
var myMap = L.map("mapid", {
  center: [
    37.09, -95.71
  ],
  zoom: 3,
  layers: [grayscaleMap, earthquakes]
});

d3.json(earthquakesURL, function(earthquakeData) {


  // Determine the earthquake marker size by their magnitude
  function markerSize(magnitude) {
    return magnitude * 4;
  };

   // Determine the earthquake marker color by depth
   function chooseColor(depth) {
    switch(true) {
      case depth > 90:
        return "red";
      case depth > 70:
        return "orangered";
      case depth > 50:
        return "orange";
      case depth > 30:
        return "yellow";
      case depth > 10:
        return "lightyellow";
      default:
        return "green";
    }
  }
