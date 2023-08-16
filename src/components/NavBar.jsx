import "../App.css";
import MoonIcon from "../assets/icon-moon.svg";

export const NavBar = () => {
  return (
    <>
      <div className="navbar flex justify-between">
        <h4 className="header-color text-2xl font-bold">devfinder</h4>
        <p className="flex items-center nav-dark-color cursor-pointer">
          DARK
          <span className="pl-3">
            <img src={MoonIcon} alt="moon-icon" />
          </span>
        </p>
      </div>
    </>
  );
};
