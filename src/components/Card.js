import React from "react";
import "./Card.css";
import { useDispatch } from "react-redux";
import { setMovie } from "../features/movieSlice";

const Card = ({ image, title, rating, description, id }) => {
  const dispatch = useDispatch();
  const getMovie = () => {
    dispatch(
      setMovie({
        id: id,
        title: title,
        image: image,
        rating: rating,
        description: description,
      })
    );
  };
  return (
    <div className="card" onClick={getMovie}>
      <img src={image} alt="" />
      <div className="card__movieHeader">
        <p className="card__title">{title}</p>
        {rating === 0 ? (
          <p className="card__rating">Coming Soon</p>
        ) : (
          <p className="card__rating">
            IMDB <span>{rating}</span>/10
          </p>
        )}
      </div>
      <div className="card__movieDesc">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
