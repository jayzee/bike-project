
    var map;

    // var googleMapWidth = $("#mapId").css('width');
    // var googleMapHeight = $("#mapId").css('height');

    function initMap() {
      map = new google.maps.Map(document.getElementById('mapId'), {
        center: {lat: 40.69847032728747, lng: -73.9514422416687},
        zoom: 12
      });

    }

$('#mapId').append('map');
