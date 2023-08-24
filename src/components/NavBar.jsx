import "../App.css";
import MoonIcon from "../assets/icon-moon.svg";
import { ThemeContext } from "../App";
import { useContext } from "react";

export const NavBar = () => {
  const { toggleTheme } = useContext(ThemeContext);
  console.log(toggleTheme);

  return (
    <>
      <div className="navbar flex justify-between">
        <h4 className="header-color text-2xl font-bold">devfinder</h4>
        <button
          className="flex items-center nav-dark-color cursor-pointer"
          onClick={toggleTheme}
        >
          DARK
          <span className="pl-3">
            <img src={MoonIcon} alt="moon-icon" />
          </span>
        </button>
      </div>
    </>
  );
};
