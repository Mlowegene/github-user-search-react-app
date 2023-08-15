import "./App.css";
import { NavBar } from "./components/NavBar";
import { SearchBar } from "./components/Searchbar";
import { UserInfo } from "./components/UserInfo";

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <NavBar />
      <SearchBar />
      <UserInfo />
    </div>
  );
}
export default App;
