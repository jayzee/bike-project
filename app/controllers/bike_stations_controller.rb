class BikeStationsController < ApplicationController

  def index

  end

  def create

    dataArray = params["stations"]

    #loops thru array of stations and creates/saves to the database
    dataArray.each do |index,station|

        newStation = BikeStation.create(name: station["name"],
        station_id: station["station_id"],
        location_lat: station["lat"],
        location_lon: station["lon"],
        capacity: station["capacity"],
        region_id: station["region_id"]
        )


    end

    @allStations = BikeStation.all

    @return = { :error => false, :response => "Added"}
    render json: {allStations: @allStations, return: @return}
    
  end

end
