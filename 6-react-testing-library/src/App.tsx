import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSlideTimer } from "./hooks/useSlideTimer";
import Input from "./components/Input/Input";
import UserProfile from "./components/UserProfile/UserProfile";
import { AuthProvider } from "./contexts/Auth/AuthContext";
import { ThemeProvider } from "./contexts/Theme/ThemeContext";

function App() {
  const [count, setCount] = useState(0);

  const [inputValue, setInputValue] = useState("");

  const [user, setUser] = useState<{ id: string; name: string } | null>(null);

  const [theme, setTheme] = useState<"light" | "dark">("light");

  const { timeLeft, pause, reset, start, isRunning } = useSlideTimer({
    duration: 10,
    autoStart: true,
  });

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <AuthProvider value={{
          user: user,
          login: function (credentials: { username: string; password: string }): void {
            setUser({ id: "1", name: credentials.username });
          },
          logout: function (): void {
            setUser(null);
          }
        }}>
          <ThemeProvider value={{
            mode: theme,
            toggleTheme: function (): void {
              setTheme((prev) => (prev === "light" ? "dark" : "light"));
            }
          }}>

          <UserProfile />
          </ThemeProvider>
        </AuthProvider>
      </div>
      <div className="card">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="card">
        <p>{timeLeft}</p>
        <button onClick={isRunning ? pause : start}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default App;
