
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
  var farmPin = {
    url: '../images/farm-pin-dark.png',
    size: new google.maps.Size(20, 33),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(10, 33),
  };
  */

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.1237552, lng: -75.6146457},
    zoom: 8,
  });

  // var infowindow = new google.maps.InfoWindow();

  var marker1 = new google.maps.Marker({ // RCO
    map: map,
    position: riverCity,
    title: 'River City Outpost'
  });

  var marker2 = new google.maps.Marker({ // --------- Castle Valley Mill ---------
    map: map,
    position: castleValley,
    title: 'Castle Valley Mill',
  });
  var castleValleyInfo = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h3 id="firstHeading" class="firstHeading">Castle Valley Mill</h3>'+
    '<div id="bodyContent">'+
    '<p>Located in the heart of Bucks County, Pennsylvania, <b>Castle Valley Mill</b> continues to produce the finest stone ground flours, meals, cleaned whole berry grains, and grain mixes.</p>'+
    '<p><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwidg_aQnIDYAhVCTd8KHRv9CiEQFggqMAA&url=http%3A%2F%2Fcastlevalleymill.com%2F&usg=AOvVaw2RzjrBWyQgtEFOgJpHpFle">Learn more »</a></p>'+
    '</div>'+
    '</div>';
  var castleValleyInfoWindow = new google.maps.InfoWindow({
    content: castleValleyInfo
  });
  marker2.addListener('click', function() {
    castleValleyInfoWindow.open(map, marker2);
  });


  var marker3 = new google.maps.Marker({ // --------- Koffman's Fruit Farm ---------
    map: map,
    position: koffmansFruit,
    title: 'Koffman&#39;s Fruit Farm'
  });
  var koffmansFruitInfo = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h3 id="firstHeading" class="firstHeading">Koffman&#39;s Fruit Farm</h3>'+
    '<div id="bodyContent">'+
    '<p>Kauffman&#39;s Family Orchard products have been recognized and enjoyed since the early 1900&#39;s. Founder Amos L. Kauffman planted the first fruit trees in 1911, and today the 3rd, 4th, & 5th generations own & operate the business.</p>'+
    '<p><a href="https://www.kauffmansfruitfarm.com/">Learn more »</a></p>'+
    '</div>'+
    '</div>';
  var koffmansFruitInfoWindow = new google.maps.InfoWindow({
    content: koffmansFruitInfo
  });
  marker3.addListener('click', function() {
    koffmansFruitInfoWindow.open(map, marker3);
  });

  var marker4 = new google.maps.Marker({
    map: map,
    position: maplehofe,
    title: 'Maplehofe Dairy Farm Store'
  });

  var marker5 = new google.maps.Marker({
    map: map,
    position: soomFoods,
    title: 'Soom Foods'
  });

  var marker6 = new google.maps.Marker({
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
