import "../App.css";
import PropTypes from "prop-types";
import githubImage from "../assets/Bitmap.png";
import locationIcon from "../assets/icon-location.svg";
import companyIcon from "../assets/icon-company.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import websiteIcon from "../assets/icon-website.svg";

export const UserInfo = ({ userData }) => {
  console.log(userData);

  function formatDate(dateString) {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("fr-FR", options);
  }

  return (
    <div className="userinfo mt-6 flex ">
      <div className="github-icon mt-12 ml-12 mr-9">
        {userData ? (
          <img
            src={userData.avatar_url}
            alt="github-icon"
            className="rounded-full"
          />
        ) : (
          <img src={githubImage} alt="github-icon" />
        )}
      </div>
      <div>
        <div className="flex justify-between mr-12 mt-10">
          <div className="">
            <h3 className="title">{userData.name}</h3>
            <p className="text-base font-normal" style={{ color: "#0079FF" }}>
              {`@${userData.login}`}
            </p>
          </div>
          <div>
            <p className="mt-2 dates">{`Joined ${formatDate(
              userData.created_at
            )}`}</p>
          </div>
        </div>
        <div className="profile-bio mt-5 mb-8">
          <p>This profile has no bio</p>
        </div>
        <div className="info grid grid-cols-3 ">
          <p className="header col-span-1 p-2">Repos</p>
          <p className="header col-span-1 p-2">Followers</p>
          <p className="header col-span-1 p-2">Following</p>
          <p className="col-span-1 p-2 text-xl font-bold uppercase">8</p>
          <p className="col-span-1 p-2 text-xl font-bold uppercase">9898</p>
          <p className="col-span-1 p-2 text-xl font-bold uppercase">9</p>
        </div>
        <div className="links grid grid-cols-2 pt-10 h-24">
          <p className="flex mr-32 ">
            <img
              src={locationIcon}
              alt="location icon"
              className="location-icon mr-4"
            />
            san fransisco
          </p>
          <p className="flex borde">
            <img
              src={twitterIcon}
              alt="twitter icon"
              className="twitter-icon mr-4"
            />
            Not available
          </p>
          <p className="flex ">
            <img
              src={websiteIcon}
              alt="website icon"
              className="website-icon mr-4 cursor-pointer "
            />
            {userData.html_url}
          </p>
          <p className="flex">
            <img
              src={companyIcon}
              alt="company icon"
              className="compnay-icon mr-4 w-5 h-5"
            />
            @github
          </p>
        </div>
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  userData: PropTypes.shape({
    username: PropTypes.string,
    name: PropTypes.string.isRequired,
    login: PropTypes.any,
    avatar_url: PropTypes.any,
    created_at: PropTypes.any,
    html_url: PropTypes.any ,
    // Define more PropTypes for other user data properties
  }).isRequired,
};
