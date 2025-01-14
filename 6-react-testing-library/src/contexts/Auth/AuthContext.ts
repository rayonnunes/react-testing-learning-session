import { createContext, useContext } from "react";

type Auth = {
  user: { id: string; name: string } | null;
  login: (credentials: { username: string; password: string }) => void;
  logout: () => void;
};

const AuthContext = createContext<Auth>({
  user: null,
  login: async () => {},
  logout: () => {},
});

export const AuthProvider = AuthContext.Provider;

export const useAuth = () => useContext(AuthContext);
