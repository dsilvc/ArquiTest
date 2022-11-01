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
  conn=PG::Connection.new(:host=>"db", :port=>5432, :dbname=>"BackArqui_development", :user=>"postgres", :password=>"password")
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
    msj = data["message"]
    puts msj.class
    n = msj.length
    puts msj.length
    i = 0
    while i < n do
      if msj[i] == "'"
        msj[i] = "''"
        n = n + 1
        i = i + 1
      end
      i = i + 1
    end

    loc = data["location"]
    n = loc.length
    i = 0
    while i < n do
      if loc[i] == "'"
        loc[i] = "''"
        n = n + 1
        i = i + 1
      end
      i = i + 1
    end
    conn.exec("INSERT INTO emergencies(tipo,lat,lon,location,message,level) VALUES(
      '#{data["type"]}', 
      #{data["lat"]}, 
      #{data["lon"]}, 
      '#{loc}',
      '#{msj}',
      #{data["level"]}
      )")
  end
end


