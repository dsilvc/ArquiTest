class AddCalculatorWorker
    include Sidekiq::Worker
    sidekiq_options retry: false
  
    # Sacado de https://stackoverflow.com/questions/12966638/how-to-calculate-the-distance-between-two-gps-coordinates-without-using-google-m
    def distance(lat1, lat2, lon1, lon2)
        rad_per_deg = Math::PI/180  # PI / 180
        rkm = 6371                  # Earth radius in kilometers
      
        dlat_rad = (lat2-lat1) * rad_per_deg  # Delta, converted to rad
        dlon_rad = (lon2-lon1) * rad_per_deg
      
        lat1_rad = lat1 * rad_per_deg
        lon1_rad = lon1 * rad_per_deg
        lat2_rad = lat2 * rad_per_deg
        lon2_rad = lon2 * rad_per_deg
      
        a = Math.sin(dlat_rad/2)**2 + Math.cos(lat1_rad) * Math.cos(lat2_rad) * Math.sin(dlon_rad/2)**2
        c = 2 * Math::atan2(Math::sqrt(a), Math::sqrt(1-a))
      
        rkm * c # Delta in meters
    end

    def perform(id)
        emerg = Emergency.find(id)
        emergs = Emergency.last(2000)
        compl = 0

        for i in 0..(emergs.length()-1) do
            emerg2 = emergs[i]
            nivel = emerg2.level
            dist = distance(emerg.lat, emerg2.lat, emerg.lon, emerg2.lon)
            if dist < 3
                compl += (nivel * dist / 100)
            end
        end

        emerg.update_attribute :complexity, compl
    end
end