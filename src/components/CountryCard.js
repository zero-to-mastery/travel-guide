import React from "react";
import "../styles/CountryCard.css";

const CountryCard = props => {
  const bcg = {
    backgroundImage: `url(${props.countryData.flag})`,
    backgroundSize: "184px auto",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    cursor: "pointer",
    color: "black"
  };
  const stl = {
    cursor: "pointer",
    color: "black",
    fontSize: 15,
    margin: 0
  };
  return (
    <div className="card">
      <div className="card__title">
        <h1 style={stl}>{props.countryData.name}</h1>
      </div>
      <div style={bcg} className="card__image"></div>
    </div>
  );
};

export default CountryCard;
