import { Emergency } from "../../Data/emergencies";

interface Props {
  emergency: Emergency;
}

export function EmergencyDisplay({ emergency }: Props) {
  return (
    <>
      <h1>Emergencia N°{emergency.id}</h1>
      <div>Emergencia de tipo {emergency.tipo}</div>
    </>
  );
}

export default EmergencyDisplay;
