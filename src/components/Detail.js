import React, { useEffect, useState } from "react";
import "./Detail.css";
import { useSelector } from "react-redux";
import { selectMovie } from "../features/movieSlice";
import axios from "../axios";

const Detail = () => {
  const movie = useSelector(selectMovie);

  const [cast, setCast] = useState([]);
  const [director, setDirector] = useState();
  const [year, setYear] = useState("");
  const [runtime, setRuntime] = useState(null);

  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    const formattedHours = String(hours).padStart(2, 0);
    const formattedMinutes = String(remainingMinutes).padStart(2, "0");
    return `${formattedHours}:${formattedMinutes}`;
  };

  useEffect(() => {
    const fetchCrew = async () => {
      const request = await axios.get(
        `movie/${movie?.id}/credits?api_key=07a0dc8d0120d7caaab7c92f067e365a`
      );
      setCast(request.data.cast.splice(0, 3));
      const newArr = request.data.crew.filter(
        (member) => member.job === "Director"
      );

      setDirector(newArr[0].name);
    };

    const fetchMovie = async () => {
      const request = await axios.get(
        `movie/${movie?.id}?api_key=07a0dc8d0120d7caaab7c92f067e365a`
      );
      setYear(request.data.release_date.substr(0, 4));
      setRuntime(parseFloat(request.data.runtime));
    };

    fetchCrew();
    fetchMovie();
  }, []);

  return (
    <div className="detail">
      <img src={movie?.image} alt={movie?.title} />
      <div className="detail__infoContainer">
        <p className="detail__movieTitle">
          {movie?.title}{" "}
          {movie?.rating === 0 ? (
            <span>Coming Soon</span>
          ) : (
            <span>{`IMDB ${movie?.rating.toFixed(1)}/10`}</span>
          )}
        </p>
        <p className="detail__movieFacts">{`${year} | ${formatRuntime(
          runtime
        )} | ${director}`}</p>
        <p className="detail__cast">
          Cast:{" "}
          {cast.map((actor) => (
            <span key={actor.id}>{actor?.name + ", "}</span>
          ))}
        </p>
        <p className="detail__description">
          Description: <span>{movie?.description}</span>
        </p>
      </div>
    </div>
  );
};

export default Detail;
