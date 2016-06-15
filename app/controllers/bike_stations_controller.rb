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

    parameters = {term: "restaurants", limit: 10, radius_filter: 100, latitude: 40.71911552 , longitude: -74.00666661}
    yelpFeedback = render json: Yelp.client.search("New York", parameters)
    binding.pry
    @return = { :error => false, :response => "Added"}
    render json: {allStations: @allStations}
    # respond_to do |format|
    #   format.json { render json: @allStation, :status => :ok}
    # end
  end

end
