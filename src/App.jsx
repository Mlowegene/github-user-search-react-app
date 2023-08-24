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

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const fetchUserData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    if (username) {
      fetchUserData();
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <div className="w-full h-screen flex flex-col items-center justify-center">
          <NavBar />
          <SearchBar setUsername={setUsername} fetchUserData={fetchUserData} />
          <UserInfo userData={userData} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
export default App;
