
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
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.1237552, lng: -75.5346457},
    zoom: 9,
  });
}

$(document).ready(function($){

  // My Kitchen item checkmarks toglle
  $('li.kitchen-item').click(function() {
     $(this).find('span').toggleClass('kitchen-item-unchecked kitchen-item-checked');
  });

});
