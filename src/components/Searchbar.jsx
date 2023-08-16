import "../App.css";
import SearchIcon from "../assets/icon-search.svg";
import PropTypes from "prop-types";

export const SearchBar = ({ setUsername, fetchUserData }) => {
  const handleSearch = () => {
    fetchUserData();
  };

  return (
    <div className="searchbar pl-8 flex items-center rounded-2xl shadow-xl">
      <img src={SearchIcon} alt="search-icon" className="pr-5" />
      <input
        type="text"
        placeholder="Search Github username..."
        onChange={(e) => setUsername(e.target.value)}
        className="text-lg w-72 cursor-pointer focus:outline-none caret-blue-500 "
      />
      <button
        onClick={handleSearch}
        className="rounded-xl text-white font-bold cursor-pointer "
      >
        Search
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  setUsername: PropTypes.func,
  fetchUserData: PropTypes.func,
};
