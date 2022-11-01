import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon.png";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility";

import { Emergency } from "../../Data/emergencies";
interface Props {
  emergencies: Emergency[];
}

export default function MapLeafletAll({ emergencies }: Props) {
  const ICON = new Icon({
    iconUrl:
      "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png",
    iconSize: [20, 20],
  });
  return (
    <>
      <MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {emergencies.map((emergency) => (
          <Marker
            position={[emergency.lat, emergency.lon]}
            icon={ICON}
            key={emergency.id}
          >
            <Popup>
              <b>{emergency.location}</b>
              <br />
              {emergency.message}
              <br />
              <i>Nivel: {emergency.level}</i>
            </Popup>
          </Marker>
        ))}
        ;
      </MapContainer>
      ,
    </>
  );
}
