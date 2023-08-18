import React from "react";
import "./Card.css";

const Card = ({ image, title, rating, description }) => {
  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="card__movieHeader">
        <p>{title}</p>
        <p className="card__rating">{rating}</p>
      </div>
      <div className="card__movieDesc">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
