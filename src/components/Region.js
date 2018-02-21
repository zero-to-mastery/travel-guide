import React from 'react';
import '../styles/Region.css';

const Region = ({name, countryList}) => {
  let countryNames = [];
  countryList.forEach(country => {
    countryNames.push(<li>{country.name}</li>);
  });
  return(
    <div className='tc bg-light-purple code dib br3 pa3 ma2 grow bw2 shadow-5 region'>
      <h2>{name}</h2>
      <ul className='list'>{countryNames}</ul>
    </div>
  )
};

export default Region;
