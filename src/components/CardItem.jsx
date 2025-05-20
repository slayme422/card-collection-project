import React from "react";
import "./style.css";

const Card = ({ imageUrl, title, quote }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <h3 className="cardTitle">{title}</h3>
      <p className="cardQuote">{quote}</p>
    </div>
  );
};

export default Card;