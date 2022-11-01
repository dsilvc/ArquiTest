import { useState, useEffect } from "react";

import { user as userData } from "./placeholders";

export interface User {
  id: number;
  email: string;
  jti: string;
}

export interface UserLogIn {
  email: string;
  password: string;
}

export interface UserSignUp {
  user: { email: string; password: string };
}

export default function useUserData(userId: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setUser(userData);
    };
    fetchUser().finally(() => setLoading(false));
  }, [userId]);

  return { user, loading };
}
