import React from 'react';
import RegionCard from './RegionCard';

const RegionList = ({ countries, regions , regionarr}) => {
  const regionArray = regions.map((region, i) => {
    if(regionarr.includes(region))
    {
    const countryList = countries.filter(country => {
      return country.region === region;
    });
    
    return <RegionCard key={i} name={region} countryList={countryList} />
    };
  
  });
  return (<div className="centerFlex"> {regionArray} </div>);
};

export default RegionList;
