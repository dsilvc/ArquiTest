import { Link } from "react-router-dom";
import { Emergency } from "../../Data/emergencies";
import { EMERGENCIES_LINK } from "../../Navigation/routes";

interface Props {
  emergency: Emergency;
}

export function EmergencyRow({ emergency }: Props) {
  return (
    <>
      <tr>
        <td>{emergency.id}</td>
        <td>{emergency.tipo}</td>
        <td>{emergency.level}</td>
        <td>{emergency.location}</td>
        <td>{emergency.message}</td>
        <td>
          <div>
            <Link to={`${EMERGENCIES_LINK}/${emergency.id}`}>Ver info</Link>
          </div>
        </td>
      </tr>
    </>
  );
}

export default EmergencyRow;
