class CreateBikeStation < ActiveRecord::Migration
  def change
    create_table :bike_stations do |t|
      t.integer :station_id
      t.string :name
      t.float :location_lat
      t.float :location_lon
      t.integer :capacity
      t.integer :region_id
    end
  end
end
