import "../App.css";
import SearchIcon from "../assets/icon-search.svg";

export const SearchBar = () => {
  return (
    <div className="searchbar pl-8 flex items-center rounded-2xl shadow-xl">
      <img src={SearchIcon} alt="search-icon" className="pr-5" />
      <input type="text" placeholder="Search Github username..." className="text-lg w-72 " />
      <button className="rounded-xl text-white font-bold ">Search</button>
    </div>
  );
};
