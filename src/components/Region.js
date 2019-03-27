import React from "react";
import SearchBox from "../components/SearchBox";
import CountryCard from "./CountryCard";
import "../styles/Region.css";

const Region = ({ region, countries, search, onSearchChange, flagList }) => {
  let countryList = countries.filter(
    country =>
      country.region === region && country.name.toLowerCase().includes(search)
  );
  let countryNames = countryList.map(country => (
    <CountryCard key={country.name} countryData={country} />
  ));

  return (
    <div className="centerFlex">
      <SearchBox onSearchChange={onSearchChange} search={search} />
      <div className="tc bg-white-90  code dib br3 pb1 ma3 bw2 shadow-5 region">
        <h2>{region}</h2>
        <ul className="list">{countryNames}</ul>
        <a
          className="f6 link dim br-pill ph4 pv2 mb2 dib white bg-purple"
          href="/"
        >
          BACK
        </a>
      </div>
    </div>
  );
};

export default Region;
