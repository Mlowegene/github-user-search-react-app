import { useState } from "react";
import "../App.css";
import SearchIcon from "../assets/icon-search.svg";
import PropTypes from "prop-types";

export const SearchBar = ({ setUsername, userNotFound }) => {
  const [input, setInput] = useState("");
  const handleSearch = () => {
    setUsername(input);
  };
  
  return (
    <div className="searchbar pl-8 flex flex-row items-center  rounded-2xl shadow-xl">
      <img src={SearchIcon} alt="search-icon" className="pr-5" />
      <input
        type="text"
        value={input}
        placeholder="Search Github username..."
        onChange={(e) => setInput(e.target.value)}
        className="text-lg w-72 cursor-pointer focus:outline-none caret-blue-500 "
      />
      {userNotFound && (
        <p className="text-center text-red-500 ml-32 mr-6 font-bold text-base">
          No results found
        </p>
      )}
      <button
        onClick={handleSearch}
        className="rounded-xl text-white font-bold cursor-pointer ml-auto mr-2"
      >
        Search
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  setUsername: PropTypes.func,
  fetchUserData: PropTypes.func,
  userNotFound: PropTypes.bool,
};
