import React from "react";
import "../styles/CountryCard.css";

const CountryCard = props => {
  const bcg = {
    backgroundImage: `url(${props.countryData.flag})`,
    backgroundSize: "200px 200px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "white",
    cursor: "pointer"
  };
  return <div style={bcg} className="card" />;
};

export default CountryCard;
