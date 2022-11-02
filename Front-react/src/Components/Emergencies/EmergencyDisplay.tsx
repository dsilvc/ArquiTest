import { useEffect, useRef, useState } from "react";
import { Emergency, emergencyWorkerData } from "../../Data/emergencies";

interface Props {
  emergency: Emergency;
}

export function EmergencyDisplay({ emergency }: Props) {
  const prevComplexityRef = useRef();
  const complexity = emergency.complexity;
  useEffect(() => {
    prevComplexityRef.current = complexity as any;
  }, [complexity]);
  console.log("new: ", emergency.complexity);
  console.log("before: ", prevComplexityRef.current);
  const [loading, setLoading] = useState(false);
  const handleComplexity = () => {
    if (!loading) {
      emergencyWorkerData(emergency.id);
      setLoading(true);
      setButton("Para ver complejidad recargue la página");
    } else {
      setLoading(false);
      setButton("Complejidad");
    }
    /**
    let change = false;
     while (!change) {
       if (complexity != emergency.complexity) {
         change = true;
         break;
        }
      }
      */
  };
  const [button, setButton] = useState("Complejidad");

  return (
    <>
      <h1>Emergencia N°{emergency.id}</h1>
      <div>Emergencia de tipo {emergency.type}</div>
      {emergency.complexity && !loading && (
        <div>Complejidad: {emergency.complexity}</div>
      )}
      <div className="buttons">
        <button onClick={handleComplexity} disabled={loading}>
          {button}
        </button>
        <button onClick={() => console.log("IMPRIMIR INFORME")}>
          Imprimir informe
        </button>
      </div>
      {loading && <div>Calculando...</div>}
    </>
  );
}

export default EmergencyDisplay;
