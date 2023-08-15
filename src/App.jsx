import "./App.css";
import { NavBar } from "./components/NavBar";
import { SearchBar } from "./components/Searchbar";

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <NavBar />
      <SearchBar />
    </div>
  );
}
export default App;
