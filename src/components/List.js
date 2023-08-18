import React from "react";
import "./List.css";
import axios from "../axios";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";

const List = ({ fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="list">
      <div className="list__cardContainer">
        {movies.map((movie) => (
          <Card
            image={`${base_url}${movie.backdrop_path}`}
            title={movie.original_title}
            rating={movie.vote_average}
            description={movie.overview}
            key={movie.id}
            id={movie.id}
          />
        ))}
      </div>
    </div>
  );
};

export default List;