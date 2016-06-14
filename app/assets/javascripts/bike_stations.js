
    var map;

    function initMap() {
      map = new google.maps.Map(document.getElementById('mapId'), {
        center: {lat: 40.69847032728747, lng: -73.9514422416687},
        zoom: 13,
        zoomControl: true,
    scaleControl: true
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
