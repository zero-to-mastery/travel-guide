import React from 'react';
import '../styles/Region.css';

const Region = ({region, countries}) => {
  let countryList = countries.filter(country => country.region === region);
  let countryNames = countryList.map(country => <li>{country.name}</li>);

  return(
    <div className='tc bg-light-purple code dib br3 pa3 ma4 grow bw2 shadow-5 region'>
      <h2>{region}</h2>
      <ul className='list'>
        {countryNames}
      </ul>
    </div>
  )
};

export default Region;
