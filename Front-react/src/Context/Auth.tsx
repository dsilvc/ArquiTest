import { useContext, createContext, useState } from "react";

import useLocalStorageState from "use-local-storage-state";

import { UserSignUp, User } from "../Data/user";
import {
  post,
  API_URL,
  SIGN_UP_API,
  LOGIN_API,
  secureDelete,
  LOGOUT_API,
} from "../Data/utils";

interface AuthContext {
  user: User | null;
  signUp: (user: UserSignUp) => Promise<number>;
  logIn: (user: UserSignUp) => Promise<number>;
  logOut: (token: string) => void;
}

const initialValue = {
  user: null,
  signUp: (_user: UserSignUp) => Promise.resolve(200),
  logIn: (_user: UserSignUp) => Promise.resolve(200),
  logOut: (token: string) => console.log(),
};

const authContext = createContext<AuthContext>(initialValue);

export function ProvideAuth({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const context = AuthHandler();
  return (
    <authContext.Provider value={context}>{children}</authContext.Provider>
  );
}
export const useAuth = (): AuthContext => {
  return useContext(authContext);
};

function AuthHandler() {
  const initialValueProducts = null;
  const [user, setUser] = useLocalStorageState("user", {
    defaultValue: initialValueProducts,
  });
  const [token, setToken] = useState(null);

  function signUp(user: UserSignUp) {
    return post({
      url: `${API_URL}${SIGN_UP_API}`,
      data: user,
    })
      .then((res) => {
        if (res.data.id) {
          setUser(res.data);
          return 200;
        } else {
          return 401;
        }
      })
      .catch(() => 401);
  }

  function logIn(user: UserSignUp) {
    return post({
      url: `${API_URL}${LOGIN_API}`,
      data: user,
    })
      .then((res) => {
        if (res.data.id) {
          setUser(res.data);
          return 200;
        } else {
          return 401;
        }
      })
      .catch(() => 401);
  }

  function logOut(token: string) {
    if (user) {
      setUser(null);
      secureDelete({ url: `${API_URL}${LOGOUT_API}`, token: token });
    }
  }

  return { user, signUp, logIn, logOut };
}
