import React from "react";
import "../styles/CountryCard.css";

const CountryCard = props => {
  const bcg = {
    backgroundImage: `url(${props.countryData.flag})`,
    backgroundSize: "200px auto",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    // backgroundColor: "white",
    cursor: "pointer"
  };
  return <div style={bcg} className="card">{props.countryData.name}</div>
};

export default CountryCard;