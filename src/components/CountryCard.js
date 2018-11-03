import React from "react";
import "../styles/CountryCard.css";

const CountryCard = props => {
  const bcg = {
    backgroundImage: `url(${props.countryData.flag})`,
    backgroundSize: "200px 200px",
    backgroundRepeat: "no-repeat",
    backgroundColor: "white"
  };
  return <div style={bcg} className="card" />;
};

export default CountryCard;
