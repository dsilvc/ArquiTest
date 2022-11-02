import { useEffect, useState } from "react";
import useSWR from "swr";
import { useAuth } from "../Context/Auth";

import { API_URL, EMERGENCIES_API, get, secureGet, WORKERDATA } from "./utils";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export interface Emergency {
  id: number;
  type: string;
  lat: number;
  lon: number;
  location: string;
  message: string;
  level: number;
  complexity: number | null;
}

export const initialEmergency = {
  id: 0,
  type: "",
  lat: 0,
  lon: 0,
  location: "",
  message: "",
  level: 0,
  complexity: null,
};

export const ITEMS_PER_PAGE = 25;

export const useEmergenciesData = () => {
  const token = useAuth().user?.jti as string;
  const { data, error } = useSWR(
    `${API_URL}${EMERGENCIES_API}`,
    () => noLoginfetchEmergencies(),
    {
      suspense: true,
    }
  );

  const emergencies = data as Emergency[];

  return { emergencies, error };
};

const fetchEmergencies = async (token: string) => {
  const data = await secureGet({
    url: `${API_URL}${EMERGENCIES_API}`,
    token: token,
  });
  return data.data;
};

const noLoginfetchEmergencies = async () => {
  const data = await get(`${API_URL}${EMERGENCIES_API}`);
  return data.data;
};

export const useEmergencyData = ({ emergencyId }: { emergencyId: number }) => {
  const { data, error } = useSWR(
    `${API_URL}${EMERGENCIES_API}/${emergencyId}`,
    () => fetchOneEmergency(emergencyId),
    {
      suspense: true,
    }
  );
  const emergency = data[0] as Emergency;
  return { emergency, error };
};

const fetchOneEmergency = async (emergencyId: number) => {
  const data = await get(`${API_URL}${EMERGENCIES_API}/${emergencyId}`);
  return data.data;
};

export const emergencyWorkerData = async (emergencyId: number) => {
  const data = await get(`${API_URL}${WORKERDATA}/${emergencyId}`);
  console.log(data.data);
};

export const useComplexityData = (emergencyId: number) => {
  const { data, error } = useSWR(
    `${API_URL}${EMERGENCIES_API}/${emergencyId}`,
    () => fetchOneEmergency(emergencyId),
    {
      suspense: true,
    }
  );
  const emergency = data[0] as Emergency;
  const complexity = emergency.complexity;
  return { complexity, error };
};
