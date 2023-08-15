import "../App.css";
import githubImage from "../assets/Bitmap.png";
import locationIcon from "../assets/icon-location.svg";
import companyIcon from "../assets/icon-company.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import websiteIcon from "../assets/icon-website.svg";

export const UserInfo = () => {
  return (
    <div className="userinfo mt-6 flex ">
      <div className="github-icon mt-12 ml-12 mr-9">
        <img src={githubImage} alt="github-icon" className="rounded-full" />
      </div>
      <div>
        <div className="flex justify-between mr-12 mt-10">
          <div className="">
            <h3 className="title">The Octocat</h3>
            <p className="text-base font-normal" style={{ color: "#0079FF" }}>
              @octocat
            </p>
          </div>
          <div>
            <p className="mt-2 dates">Joined 25 Jan 2011</p>
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
              className="website-icon mr-4"
            />
            https://github.blog
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
