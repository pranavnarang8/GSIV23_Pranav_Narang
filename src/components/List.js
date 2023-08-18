import React from "react";
import "./List.css";
import axios from "../axios";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";

const List = ({ fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(2);
  const base_url = "https://image.tmdb.org/t/p/original/";

  const fetchMoreMovies = async () => {
    const request = await axios.get(`${fetchUrl}&page=${page}`);
    const dataArray = request.data.results;

    dataArray.sort((a, b) => {
      const dateA = new Date(a.release_date);
      const dateB = new Date(b.release_date);
      return dateB - dateA;
    });

    setMovies([...movies, ...dataArray]);
    setPage(page + 1);
    return request;
  };

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      const dataArray = request.data.results;

      dataArray.sort((a, b) => {
        const dateA = new Date(a.release_date);
        const dateB = new Date(b.release_date);
        return dateB - dateA;
      });

      setMovies(dataArray);
      return request;
    };

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="list">
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchMoreMovies}
        hasMore={page !== 24}
      >
        <div className="list__cardContainer">
          {movies.map(
            (movie) =>
              movie.backdrop_path && (
                <Card
                  image={`${base_url}${movie.backdrop_path}`}
                  title={movie.title}
                  rating={movie.vote_average}
                  description={movie.overview}
                  key={movie.id}
                  id={movie.id}
                />
              )
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default List;
