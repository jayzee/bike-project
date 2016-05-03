# == Schema Information
#
# Table name: bike_stations
#
#  id           :integer          not null, primary key
#  station_id   :integer
#  name         :string
#  location_lat :float
#  location_lon :float
#  capacity     :integer
#  region_id    :integer
#

class BikeStation < ActiveRecord::Base
    
end
