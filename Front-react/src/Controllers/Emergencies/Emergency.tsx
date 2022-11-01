import { Link, useParams } from "react-router-dom";
import EmergencyDisplay from "../../Components/Emergencies/EmergencyDisplay";
import MapLeaflet from "../../Components/Map/MapLeafletOne";
import { useAuth } from "../../Context/Auth";
import { useEmergencyData } from "../../Data/emergencies";
import { EMERGENCIES_LINK } from "../../Navigation/routes";

import "leaflet/dist/leaflet.css";

export default function SignUp() {
  const params = useParams();
  const emergencyId = params?.emergencyId ?? "";
  const emergency = useEmergencyData({
    emergencyId: parseInt(emergencyId),
  });
  const { user } = useAuth();
  return (
    <>
      {!user && (
        <div className="not-logged">
          Debes iniciar sesión para ver las emergencias
        </div>
      )}
      {user && (
        <div className="emergency">
          <EmergencyDisplay emergency={emergency}></EmergencyDisplay>
          <Link to={EMERGENCIES_LINK}>{` < Atrás`}</Link>
          <div id="map">
            <MapLeaflet emergency={emergency}></MapLeaflet>
          </div>
        </div>
      )}
    </>
  );
}
