import { useAuth } from "../../contexts/Auth/AuthContext";
import { useTheme } from "../../contexts/Theme/ThemeContext";

function UserProfile() {
  const { user, logout, login } = useAuth();
  const { mode, toggleTheme } = useTheme();

  if (!user)
    return (
      <div>
        <div>Please log in</div>
        <button onClick={() => login({
            username: "johndoe",
            password: "password"
          })}>Login</button>
      </div>
    );

  return (
    <div data-testid="profile" className={mode}>
      <h1>Welcome {user.name}</h1>
      <button onClick={toggleTheme}>Toggle Theme: {mode}</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
export default UserProfile;
