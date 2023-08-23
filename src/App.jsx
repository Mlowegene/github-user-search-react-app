import "./App.css";
import { NavBar } from "./components/NavBar";
import { SearchBar } from "./components/Searchbar";
import { UserInfo } from "./components/UserInfo";
import { useState, useEffect } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

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
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <NavBar />
      <SearchBar setUsername={setUsername} fetchUserData={fetchUserData} />
      <UserInfo userData={userData} />
    </div>
  );
}
export default App;
