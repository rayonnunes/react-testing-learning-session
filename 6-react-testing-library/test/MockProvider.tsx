import { useState, ReactNode } from "react";
import { AuthProvider } from "../src/contexts/Auth/AuthContext";
import { ThemeProvider } from "../src/contexts/Theme/ThemeContext";

export type MockProviderProps = { children: ReactNode, initialAuth?: { id: string; name: string } | null, initialTheme?: "light" | "dark" };

function MockProvider(props: MockProviderProps) {
    console.log("props", props);
    const { children, initialAuth = null, initialTheme = "light" } = props;
    console.log("initialAuth", initialAuth);
    console.log("initialTheme", initialTheme);
    
  const [theme, setTheme] = useState<"light" | "dark">(initialTheme);
  const [user, setUser] = useState<{ id: string; name: string } | null>(initialAuth);

  const authContextValue = {
    user,
    login: async (credentials: { username: string; password: string }) => {
      setUser({ id: "1", name: credentials.username });
    },
    logout: () => setUser(null),
  };

  const themeContextValue = {
    mode: theme,
    toggleTheme: () =>
      setTheme((prev) => (prev === "light" ? "dark" : "light")),
  };

  return (
    <AuthProvider value={authContextValue}>
      <ThemeProvider value={themeContextValue}>{children}</ThemeProvider>
    </AuthProvider>
  );
}

export default MockProvider;
