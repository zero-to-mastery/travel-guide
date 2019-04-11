import React from "react";
import SearchBox from "../components/SearchBox";
import CountryCard from "./CountryCard";
import "../styles/Region.css";
import { Link } from 'react-router-dom';

const Region = ({ region, countries, search, onSearchChange, flagList }) => {
  let countryList = countries.filter(
    country =>
      country.region === region && country.name.toLowerCase().includes(search)
  );
  let countryNames = countryList.map(country => (
    <Link to={`/travel-guide/detail/${country.name}`}>
      <CountryCard key={country.name} countryData={country} />
    </Link>
  ));

  return (
    <div className="centerFlex">
      <SearchBox onSearchChange={onSearchChange} search={search} />
      <div className="tc bg-white-90  code dib br3 pb1 ma3 bw2 shadow-5 region">
        <h2>{region}</h2>
        <ul className="list" >{countryNames}</ul>
        <Link
          className="f6 link dim br-pill ph4 pv2 mb2 dib white bg-purple"
          to="/travel-guide"
        >
          BACK
        </Link>
      </div>
    </div>
  );
};

export default Region;
