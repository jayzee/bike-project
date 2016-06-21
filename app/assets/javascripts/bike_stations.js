
    var map;

    function initAutocomplete() {
      map = new google.maps.Map(document.getElementById('mapId'), {
        center: {lat: 40.69847032728747, lng: -73.9514422416687},
        zoom: 13,
        zoomControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    scaleControl: true
      });

      // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });

    }

    $('#mapId').append('map');









$(document).ready(function(){

   $.ajax({ url: "https://gbfs.citibikenyc.com/gbfs/en/station_information.json",
        method: 'GET'}).then(function(data){

          var dataInformation = data.data

          // call to controller to save all the data as ruby objects
          $.ajax({
            url: '/bike_stations',
            method: 'POST',
            data: dataInformation,
            dataType: "json",
            success: function(data){
                //return after hitting controller
                debugger;
          for(var i=0;  i < data.allStations.length; i++){
              new google.maps.Marker({
                position: {lat: data.allStations[i]["location_lat"], lng: data.allStations[i]["location_lon"]},
                  map: map,
                 title: data.allStations[i]["name"]
                   })
                } // end of for loop



            }

          })
        });


});
