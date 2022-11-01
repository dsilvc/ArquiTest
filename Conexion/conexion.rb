require 'mqtt'
require 'json'
require 'pg'

conn_opts = {
  remote_host: 'planetaryevents.iic2173.net',
  remote_port: 9000,
  username: 'common',
  password: 'iic2173',
}

begin
  conn=PG::Connection.new(:host=>"db", :port=>5432, :dbname=>"arqui_e0", :user=>"postgres", :password=>"password")
rescue => PG::ConnectionBad
  conn = nil
  retry
end

# res = conn.exec("SELECT * FROM users")
# puts res.values


MQTT::Client.connect(conn_opts) do |c|
    # The block will be called when you messages arrive to the topic
    c.get('global-emergencies') do |topic, message|
      puts "#{topic}: #{message}"
      data = JSON.parse(message)
      conn.exec("INSERT INTO emergencies(tipo,lat,lon,location,message,level) VALUES(
        '#{data["type"]}', 
        #{data["lat"]}, 
        #{data["lon"]}, 
        '#{data["location"]}',
        '#{data["message"]}',
        #{data["level"]}
        )")
    end
end


