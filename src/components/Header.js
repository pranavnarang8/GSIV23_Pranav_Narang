import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  disableHasMore,
  enableHasMore,
  resetFilter,
  selectMovie,
  setFilter,
} from "../features/movieSlice";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { resetMovie } from "../features/movieSlice";
import { useHistory } from "react-router-dom";

const Header = ({ backArrowIcon }) => {
  const [input, setInput] = useState();
  const dispatch = useDispatch();
  const movie = useSelector(selectMovie);
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setFilter(input));
    dispatch(disableHasMore());
    if (input === "") {
      dispatch(resetFilter());
      dispatch(enableHasMore());
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
