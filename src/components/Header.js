import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";

const Header = () => {
  return (
    <div className="header">
      <div className="header__search">
        <SearchIcon className="header__searchIcon" />
        <input type="text" placeholder="Search" />
      </div>
      <HomeIcon className="header__homeIcon" />
    </div>
  );
};

export default Header;
