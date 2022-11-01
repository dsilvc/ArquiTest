import EmergencyRow from "./EmergencyRow";

import { Emergency } from "../../Data/emergencies";
import "../../Assets/styles/table.css";

interface Props {
  emergencies: Emergency[];
}

export default function EmergenciesList({ emergencies }: Props) {
  return (
    <div>
      <h1>Todas las emergencias</h1>
      <table id="customers">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tipo</th>
            <th>Nivel</th>
            <th>Ubicación</th>
            <th>Mensaje</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {emergencies.map((emergency) => (
            <EmergencyRow key={emergency.id} emergency={emergency} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
