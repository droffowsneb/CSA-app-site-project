var map;
function initMap() {
  var riverCity = {lat: 40.0259761, lng: -75.2274273};
  var castleValley = {lat: 40.2808521, lng: -75.1632479};
  var koffmansFruit = {lat: 40.038893, lng: -76.1472587};
  var maplehofe = {lat: 39.8772433, lng: -76.1573833};
  var soomFoods = {lat: 40.00673, lng: -75.12017};
  var daisyFlour = {lat: 40.0401, lng: -76.32451};

  var farmPinIcon = 'http://benswofford.com/csa-app-demo/images/farm-pin-blue.png';
  var rcoIcon = 'http://benswofford.com/csa-app-demo/images/rco-squirrel-40.png';

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.1237552, lng: -75.6146457},
    zoom: 8,
  });

  var infowindow = new google.maps.InfoWindow({
    maxWidth: 225,
  });

  var marker1 = new google.maps.Marker({ // ------------------ River City Outpost ------------------
    map: map,
    position: riverCity,
    title: 'River City Outpost',
    icon: rcoIcon,
    zIndex: 1000,
  });
  var riverCityInfo = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h3 id="firstHeading" class="firstHeading">River City Outpost</h3>'+
    '<div id="bodyContent">'+
    '<p>Market and slow-food cafe offering fresh produce, local dry goods and provisions.</p>'+
    '<p><a href="https://www.facebook.com/rivercityoutpost/">Follow us on Facebook »</a></p>'+
    '</div>'+
    '</div>';
  var riverCityInfoWindow = new google.maps.InfoWindow({
    content: riverCityInfo,
  });
  marker1.addListener('click', function() {
    infowindow.open(map, marker1);
    infowindow.setOptions({
        content: riverCityInfo,
    });
  });

  var marker2 = new google.maps.Marker({ // ------------------ Castle Valley Mill ------------------
    map: map,
    position: castleValley,
    title: 'Castle Valley Mill',
    icon: farmPinIcon,
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
    content: castleValleyInfo,
  });
  marker2.addListener('click', function() {
    infowindow.open(map, marker2);
    infowindow.setOptions({
        content: castleValleyInfo,
    });
  });


  var marker3 = new google.maps.Marker({ // ------------------ Koffman's Fruit Farm ------------------
    map: map,
    position: koffmansFruit,
    title: 'Koffman&#39;s Fruit Farm',
    icon: farmPinIcon,
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
    infowindow.setOptions({
        content: koffmansFruitInfo,
    });
    infowindow.open(map, marker3);
  });


  var marker4 = new google.maps.Marker({ // ------------------ Maplehofe Dairy ------------------
    map: map,
    position: maplehofe,
    title: 'Maplehofe Dairy Farm Store',
    icon: farmPinIcon,
  });
  var maplehofeInfo = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h3 id="firstHeading" class="firstHeading">Maplehofe Dairy Farm Store</h3>'+
    '<div id="bodyContent">'+
    '<p>The Maplehofe story began with the Glick family farm, developed in 1948 by Aaron and Susie Glick. We built the existing Quarryville store and the original processing plant in 1974 to meet the growing demand for our farm fresh milk and eggs. In 1999 we added a dairy stand and bulk food stand at the historic Lancaster Central Market. The dairy started an expansion project in 2015 and opened a new processing plant in Quarryville at the beginning of 2016. We are deeply grateful for the relationships we have with individuals, families and businesses in our area.</p>'+
    '<p><a href="http://www.maplehofedairy.com/">Learn more »</a></p>'+
    '</div>'+
    '</div>';
  var maplehofeInfoWindow = new google.maps.InfoWindow({
    content: maplehofeInfo
  });
  marker4.addListener('click', function() {
    infowindow.setOptions({
        content: maplehofeInfo,
    });
    infowindow.open(map, marker4);
  });


  var marker5 = new google.maps.Marker({ // ------------------ Soom Foods ------------------
    map: map,
    position: soomFoods,
    title: 'Soom Foods',
    icon: farmPinIcon,
  });
  var soomInfo = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h3 id="firstHeading" class="firstHeading">Soom Foods</h3>'+
    '<div id="bodyContent">'+
    '<p>Soom Foods is a leading purveyor of premium tahini – a paste made from 100% roasted and pressed sesame seeds. Soom Tahini is a delicious, nutritious and versatile ingredient favored by at-home and professional chefs.</p>'+
    '<p><a href="https://www.soomfoods.com/">Learn more »</a></p>'+
    '</div>'+
    '</div>';
  var soomInfoWindow = new google.maps.InfoWindow({
    content: soomInfo
  });
  marker5.addListener('click', function() {
    infowindow.setOptions({
        content: soomInfo,
    });
    infowindow.open(map, marker5);
  });

  var marker6 = new google.maps.Marker({ // ------------------ Daisy Flour ------------------
    map: map,
    position: daisyFlour,
    title: 'Daisy Flour',
    icon: farmPinIcon,
  });
  var daisyInfo = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h3 id="firstHeading" class="firstHeading">Daisy Flour</h3>'+
    '<div id="bodyContent">'+
    '<p>Great recipes begin with Daisy Flour, wholesome goodness, milled the old-fashioned way! 100% organic, GMO-FREE.</p>'+
    '<p><a href="http://www.daisyflour.com/">Learn more »</a></p>'+
    '</div>'+
    '</div>';
  var daisyInfoWindow = new google.maps.InfoWindow({
    content: daisyInfo
  });
  marker6.addListener('click', function() {
    infowindow.setOptions({
        content: daisyInfo,
    });
    infowindow.open(map, marker6);
  });
}




$(document).ready(function($){

  // Home page list carets
  $('div.list-header').click(function() {
     $(this).find('span').toggleClass('list-header-open list-header-closed');
  });

  // My Kitchen item checkmarks toglle
  $('li.kitchen-item').click(function() {
     $(this).find('span').toggleClass('kitchen-item-unchecked kitchen-item-checked');
  });

  // My Kitchen shopping filter
  $('button.kitchen-filter').click(function() {
    $(this).toggleClass('kitchen-filter-off kitchen-filter-on');
    $('div.kitchen-body').find('li>span.kitchen-item-checked').parent().toggle();
  });

});
