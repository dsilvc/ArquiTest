import { lazy } from "react";

const Home = lazy(() => import("../Controllers/Home"));
const Emergencies = lazy(
  () => import("../Controllers/Emergencies/Emergencies")
);
const Emergency = lazy(() => import("../Controllers/Emergencies/Emergency"));
const LogIn = lazy(() => import("../Controllers/Auth/LogIn"));
const SignUp = lazy(() => import("../Controllers/Auth/SignUp"));

export const EMERGENCIES_LINK = "/emergencies";
export const LOGIN_LINK = "/login";
export const SIGNUP_LINK = "/users/new";

export const appRoutes = [
  { path: "/", component: Home },
  { path: `${EMERGENCIES_LINK}`, component: Emergencies },
  { path: `${EMERGENCIES_LINK}/:emergencyId`, component: Emergency },
  { path: `${LOGIN_LINK}`, component: LogIn },
  { path: `${SIGNUP_LINK}`, component: SignUp },
];
