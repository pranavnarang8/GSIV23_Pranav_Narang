import React from "react";
import "./List.css";
import axios from "../axios";
import { useState } from "react";
import { useEffect } from "react";

const List = ({ fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };

    fetchData();
  }, [fetchUrl]);

  console.log(movies);
  return <div className="list">This is a List</div>;
};

export default List;
