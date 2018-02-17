import React from 'react';
import Region from './Region';

const RegionList = ({ regions }) => {
  const regionArray = regions.map((region, i) => {
    return (
      <Region
        key = {i}
        name = {region}
      />
    );
  });
  return (<div> {regionArray} </div>);
};

export default RegionList;
