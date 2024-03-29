import "./App.css";
import { NavBar } from "./components/NavBar";
import { SearchBar } from "./components/Searchbar";
import { UserInfo } from "./components/UserInfo";
import { useState, useEffect, createContext } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [theme, setTheme] = useState("light");
  const [userNotFound, setUserNotFound] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  
  useEffect(() => {
    if (username) {
      const fetchUserData = async () => {
        try {
          const response = await fetch(`https://api.github.com/users/${username}`);
          if (response.ok) {
            const data = await response.json();
            setUserData(data);
          } else {
            setUserNotFound(true);
            setUserData(null);
          }
        } catch (error) {
          setUserNotFound(true);
          setUserData(null);
        }
      };
    fetchUserData();
    }
  }, [username]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <div className="w-full h-screen flex flex-col items-center justify-center">
          <NavBar />
          <SearchBar
            setUsername={setUsername}
            userNotFound={userNotFound}
          />
          <UserInfo userData={userData} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
export default App;
