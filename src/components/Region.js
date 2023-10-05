import React from "react";
import SearchBox from "../components/SearchBox";
import CountryCard from "./CountryCard";
import "../styles/Region.css";
import { Link } from "react-router-dom";

const Region = ({ region, countries, search, onSearchChange, flagList }) => {
  let countryList = countries.filter(
    country =>
      country.region === region && country.name.toLowerCase().includes(search)
  );
  let countryNames = countryList.map(country => (
    <Link key={country.name} to={`/travel-guide/detail/${country.name}`}>
      <CountryCard countryData={country} />
    </Link>
  ));

  return (
    <div
      className="centerFlex"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1496950866446-3253e1470e8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"
      }}
    >
      <SearchBox onSearchChange={onSearchChange} search={search} />
      <div className="tc bg-black-60 code dib br3 pb1 ma3 bw2 shadow-5 region regionFlagContainer">
        <h2>{region}</h2>
        <ul className="list">{countryNames}</ul>
        <Link
          className="f6 link dim br-pill ph4 pv2 mb2 dib black bg-white"
          to="/travel-guide"
          onClick={(e) => {
            e.target.value = "";
            onSearchChange(e);
          }
        }
        >
          BACK
        </Link>
      </div>
    </div>
  );
};

export default Region;
