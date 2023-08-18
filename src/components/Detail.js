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

  useEffect(() => {
    const fetchCrew = async () => {
      const request = await axios.get(
        `movie/615656/credits?api_key=07a0dc8d0120d7caaab7c92f067e365a`
      );
      setCast(request.data.cast.splice(0, 3));
      const newArr = request.data.crew.filter(
        (member) => member.job === "Director"
      );

      setDirector(newArr[0].name);
    };

    const fetchMovie = async () => {
      const request = await axios.get(
        `movie/615656?api_key=07a0dc8d0120d7caaab7c92f067e365a`
      );
      setYear(request.data.release_date.substr(0, 4));
      console.log(parseFloat(request.data.runtime));
    };

    fetchCrew();
    fetchMovie();
  }, []);

  return (
    <div className="detail">
      <img
        src="https://image.tmdb.org/t/p/original/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg"
        alt=""
      />
      <div className="detail__infoContainer">
        <h3>Movie Title</h3>
        <p>{`${year} | 2h45M | ${director}`}</p>
        <p>
          Cast:{" "}
          {cast.map((actor) => (
            <span key={actor.id}>{actor?.name + ", "}</span>
          ))}
        </p>
        <p>
          Description:{" "}
          <span>
            A life of an ordinary Parisian teenager Marinette goes superhuman
            when she becomes Ladybug. Bestowed with magical powers of creation,
            Ladybug must unite with her opposite, Cat Noir, to save Paris as a
            new villain unleashes chaos unto the city.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Detail;
