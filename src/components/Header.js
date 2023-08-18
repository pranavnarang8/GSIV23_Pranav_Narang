import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetFilter, setFilter } from "../features/movieSlice";

const Header = () => {
  const [input, setInput] = useState();
  const dispatch = useDispatch();

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
      </div>
      <HomeIcon className="header__homeIcon" />
    </div>
  );
};

export default Header;
