import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter, setFilter, setMovie } from "../features/movieSlice";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Header = () => {
  const [input, setInput] = useState();
  const dispatch = useDispatch();
  const movie = useSelector(setMovie);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setFilter(input));
    if (input === "") {
      dispatch(resetFilter);
    }
  };
  return (
    <div className="header">
      <div className="header__search">
        {!movie ? (
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
        ) : (
          <ArrowBackIcon className="header__arrowBackIcon" />
        )}
      </div>
      <HomeIcon className="header__homeIcon" />
    </div>
  );
};

export default Header;
