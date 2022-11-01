import useSWR from "swr";
import { useAuth } from "../Context/Auth";

import { API_URL, EMERGENCIES_API, secureGet } from "./utils";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export interface Emergency {
  id: number;
  tipo: string;
  lat: number;
  lon: number;
  location: string;
  message: string;
  level: number;
}

export const initialEmergency = {
  id: 0,
  tipo: "",
  lat: 0,
  lon: 0,
  location: "",
  message: "",
  level: 0,
};

export const ITEMS_PER_PAGE = 25;

export const useEmergenciesData = () => {
  const token = useAuth().user?.jti as string;
  const { data, error } = useSWR(
    `${API_URL}${EMERGENCIES_API}`,
    () => fetchProducts(token),
    {
      suspense: true,
    }
  );

  const emergencies = data as Emergency[];

  return { emergencies, error };
};

const fetchProducts = async (token: string) => {
  const data = await secureGet({
    url: `${API_URL}${EMERGENCIES_API}`,
    token: token,
  });
  return data.data;
};

export const useEmergencyData = ({ emergencyId }: { emergencyId: number }) => {
  const { emergencies } = useEmergenciesData();
  const emergency = emergencies.find(
    (emergency) => emergency.id === emergencyId
  );
  console.log(emergency);

  const returnEmergency = emergency as Emergency;

  return returnEmergency;
};
