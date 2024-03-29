import React from "react";
import "./List.css";
import axios from "../axios";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { selectFilter } from "../features/movieSlice";
import { ScaleLoader } from "react-spinners";

const List = ({ fetchUpcoming, fetchSearch }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(2);
  const [totalPages, setTotalPages] = useState();
  const [loading, setLoading] = useState(false);

  const base_url = "https://image.tmdb.org/t/p/original/";
  const filterQuery = useSelector(selectFilter);

  const fetchMoreMovies = async () => {
    if (!filterQuery) {
      const request = await axios.get(`${fetchUpcoming}&page=${page}`);
      const dataArray = request.data.results;

      dataArray.sort((a, b) => {
        const dateA = new Date(a.release_date);
        const dateB = new Date(b.release_date);
        return dateB - dateA;
      });

      setMovies([...movies, ...dataArray]);

      setPage(page + 1);
      return request;
    } else {
      return;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!filterQuery) {
        setLoading(true);
        const request = await axios.get(fetchUpcoming);
        const dataArray = request.data.results;
        setTotalPages(request.data.total_pages);

        dataArray.sort((a, b) => {
          const dateA = new Date(a.release_date);
          const dateB = new Date(b.release_date);
          return dateB - dateA;
        });

        setMovies(dataArray);
        setLoading(false);
        return request;
      } else {
        setLoading(true);
        const request = await axios.get(`${fetchSearch}${filterQuery}`);
        const dataArray = request.data.results;

        dataArray.sort((a, b) => {
          const dateA = new Date(a.release_date);
          const dateB = new Date(b.release_date);
          return dateB - dateA;
        });

        setMovies(dataArray);
        setLoading(false);
        return request;
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, [filterQuery]);

  return (
    <div className="list">
      {!loading ? (
        <InfiniteScroll
          dataLength={movies.length}
          next={fetchMoreMovies}
          hasMore={page !== totalPages}
          loader={
            !filterQuery && (
              <div className="list__loaderInfiniteScroll">
                <ScaleLoader color="#4a4a4a" />
              </div>
            )
          }
        >
          <div className="list__cardContainer">
            <div className="list__cardChildContainer">
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
          </div>
        </InfiniteScroll>
      ) : (
        <div className="list__loaderContainer">
          <ScaleLoader color="#4a4a4a" />
        </div>
      )}
    </div>
  );
};

export default List;
