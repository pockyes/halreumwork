let API_KEY = "623f64a59e11c6535da2ea6c5f5409ff";
let COORDS = 'coords';

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
}

function handleGeoError() {
  console.log('error !!');
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  let loaedCords = localStorage.getItem(COORDS);
  if(loaedCords === null) {
    askForCoords();
  } else {
    // getWeather
  }
}

function init() {
  loadCoords();
}

init();