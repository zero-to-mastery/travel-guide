import React from 'react';
import Region from './Region';

const RegionList = ({ countries, regions }) => {

  const regionArray = regions.map((region, i) => {
    const countryList = countries.filter(country => {
      return country.region === region;
    });

    return (
      <Region
        key = {i}
        name = {region}
        countryList = {countryList}
      />
    );
  });
  return (<div> {regionArray} </div>);
};

export default RegionList;
