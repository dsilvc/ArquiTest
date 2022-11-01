import { useContext, createContext } from "react";

import useLocalStorageState from "use-local-storage-state";
import { Emergency } from "../Data/emergencies";

interface EmergenciesInPageContext {
  emergencies: Emergency[];
  modifyEmergencies: (emergencies: Emergency[]) => void;
}

const initialValue = {
  emergencies: [],
  modifyEmergencies: (emergencies: Emergency[]) =>
    console.log("lenght:", emergencies.length),
};

const emergenciesInPageContext =
  createContext<EmergenciesInPageContext>(initialValue);

export function ProvideEmergenciesInPage({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const context = EmergenciesInPageHandler();
  return (
    <emergenciesInPageContext.Provider value={context}>
      {children}
    </emergenciesInPageContext.Provider>
  );
}

export const useEmergenciesInPage = (): EmergenciesInPageContext => {
  return useContext(emergenciesInPageContext);
};

function EmergenciesInPageHandler() {
  const initialValueEmergencies: Emergency[] = [];
  const [emergencies, setEmergenciesState] = useLocalStorageState(
    "EmergenciesInPage",
    {
      defaultValue: initialValueEmergencies,
    }
  );
  const modifyEmergencies = (newEmergencies: Emergency[]) => {
    setEmergenciesState(newEmergencies);
    return emergencies;
  };

  return {
    emergencies,
    modifyEmergencies,
  };
}
