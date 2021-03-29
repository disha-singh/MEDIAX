import React from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import GetAppIcon from "@material-ui/icons/GetApp";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="header">
      <p class="header-name">MEDIAX</p>
      <div className="move-left">
        <SearchBar />
      </div>
      <div class="dropdown">
        <button class="dropbtn">Movie</button>
        <div class="dropdown-content">
          <a href="#">Actor</a>
          <a href="#">Advanced Search</a>
        </div>
      </div>
      <div className="header__icons">
        <div className="header_icon">
          <GetAppIcon />
          <p>Downloads</p>
        </div>
        <div className="header_icon">
          <VideoLibraryIcon />
          <p>Collections</p>
        </div>
        <div
          className="header_icon
            header_icon--active"
        >
          <HomeIcon />
          <p>Home</p>
        </div>
        <div className="header_icon">
          <PersonOutlineIcon />
          <p>Account</p>
        </div>
      </div>
    </div>
  );
}
export default Header;
