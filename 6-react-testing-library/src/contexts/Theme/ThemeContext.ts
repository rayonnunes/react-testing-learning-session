import { createContext, useContext } from "react";

type Theme = {
  mode: "light" | "dark";
  toggleTheme: () => void;
};

const ThemeContext = createContext<Theme>({
  mode: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
