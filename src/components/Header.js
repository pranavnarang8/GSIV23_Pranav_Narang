import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetFilter, setFilter } from "../features/movieSlice";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { resetMovie } from "../features/movieSlice";
import { useHistory } from "react-router-dom";

const Header = ({ backArrowIcon }) => {
  const [input, setInput] = useState();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setFilter(input));
    if (input === "") {
      dispatch(resetFilter());
    }
  };

  const handleNavBack = (e) => {
    e.preventDefault();
    dispatch(resetMovie());
    history.push("/");
  };
  return (
    <div className="header">
      <div className="header__search">
        {backArrowIcon ? (
          <ArrowBackIcon
            className="header__arrowBackIcon"
            onClick={handleNavBack}
          />
        ) : (
          <form>
            <SearchIcon className="header__searchIcon" onClick={handleSearch} />
            <input
              type="text"
              placeholder="Search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="Submit" onClick={handleSearch}></button>
          </form>
        )}
      </div>
      <HomeIcon className="header__homeIcon" onClick={handleNavBack} />
    </div>
  );
};

export default Header;
