import axios from "axios";

interface Props<D> {
  url: string;
  data: D;
}

interface SecurePost extends Props<unknown> {
  token: string;
}

interface SecureGet {
  url: string;
  token: string;
}

export const post = ({ url, data }: Props<unknown>) => {
  return axios.post(url, data).then((res: any) => res);
};

export const securePost = ({ url, data, token }: SecurePost) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios.post(url, data, config).then((res) => res);
};

export const secureGet = ({ url, token }: SecureGet) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios.get(url, config).then((res) => res);
};

export const get = (url: string) => axios.get(url).then((res) => res);

export const securePut = ({ url, data, token }: SecurePost) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios.put(url, data, config).then((res) => res);
};

export const secureDelete = ({ url, token }: SecureGet) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios.delete(url, config).then((res) => res);
};

export const API = "https://arquiemergencias.me/";
export const INSTANCE = "http://44.193.125.122:3333/";
export const API_URL =
  "https://q9fjauswsg.execute-api.us-east-1.amazonaws.com/";
export const EMERGENCIES_API = "emergencies";
export const SIGN_UP_API = "signup";
export const LOGIN_API = "login";
export const LOGOUT_API = "logout";
export const WORKERDATA = "workerdata";
