import "../App.css";
import MoonIcon from "../assets/icon-moon.svg";
import SunIcon from "../assets/icon-sun.svg";
import { ThemeContext } from "../App";
import { useContext } from "react";

export const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div className="navbar flex justify-between">
        <h4 className="header-color text-2xl font-bold">devfinder</h4>
        <button
          className="flex items-center nav-dark-color cursor-pointer"
          onClick={toggleTheme}
        >
          {theme === "dark" ? (
            <>
              LIGHT
              <span className="pl-3">
                <img src={SunIcon} alt="moon-icon" />
              </span>
            </>
          ) : (
            <>
              DARK
              <span className="pl-3">
                <img src={MoonIcon} alt="moon-icon" />
              </span>
            </>
          )}
        </button>
      </div>
    </>
  );
};
