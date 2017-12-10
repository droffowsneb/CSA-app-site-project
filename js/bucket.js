
/* function initMap() {
  var uluru = {lat: 40.1237552, lng: -76.0346457};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
} */


var map;
function initMap() {
  var riverCity = {lat: 40.0259761, lng: -75.2274273};
  var castleValley = {lat: 40.2808521, lng: -75.1632479};
  var koffmansFruit = {lat: 40.038893, lng: -76.1472587};
  var maplehofe = {lat: 39.8772433, lng: -76.1573833};
  var soomFoods = {lat: 40.00673, lng: -75.12017};
  var daisyFlour = {lat: 40.0401, lng: -76.32451};

  /*
  // CUSTOM PIN CODE
  // I can't get this to actually show up. might be a z-index problem?
  var farmPin = {
    url: '../images/farm-pin-dark.svg',
    size: new google.maps.Size(20, 33),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(10, 33)
  };
  */

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.1237552, lng: -75.6146457},
    zoom: 8,
  });

  var marker = new google.maps.Marker({
    map: map,
    position: riverCity,
    title: 'River City Outpost'
  });

  var marker = new google.maps.Marker({
    map: map,
    position: castleValley,
    title: 'Castle Valley Mill',
  });

  var marker = new google.maps.Marker({
    map: map,
    position: koffmansFruit,
    title: 'Koffman&#39;s Fruit Farm'
  });

  var marker = new google.maps.Marker({
    map: map,
    position: maplehofe,
    title: 'Maplehofe Dairy Farm Store'
  });

  var marker = new google.maps.Marker({
    map: map,
    position: soomFoods,
    title: 'Soom Foods'
  });

  var marker = new google.maps.Marker({
    map: map,
    position: daisyFlour,
    title: 'Daisy Flour'
  });
}



$(document).ready(function($){

  // My Kitchen item checkmarks toglle
  $('li.kitchen-item').click(function() {
     $(this).find('span').toggleClass('kitchen-item-unchecked kitchen-item-checked');
  });

});
