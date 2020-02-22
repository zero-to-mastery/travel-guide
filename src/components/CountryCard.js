import React from "react";
import "../styles/CountryCard.css";

const CountryCard = props => {
  const bcg = {
    backgroundImage: `url(${props.countryData.flag})`,
    backgroundSize: "200px auto",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "white",
    cursor: "pointer",
    color:"black"
  };
    const stl = {
      cursor: "pointer",
      color:"black",
      fontSize:15
    };
  return (
            <div>
            <h1 style={stl}>{props.countryData.name}</h1>
            <div style={bcg} className="card"></div>
            </div>
            )
};

export default CountryCard;