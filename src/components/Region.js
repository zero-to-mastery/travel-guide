import React from 'react';
import SearchBox from '../components/SearchBox';
import CountryCard from './CountryCard';
import '../styles/Region.css';

const Region = ({ region, countries, onSearchChange }) => {
  let countryList = countries.filter(country => country.region === region);
  let countryNames = countryList.map(country => <CountryCard key={country.name} countryData={country} />);

  return (
    <div className="centerFlex">
      <SearchBox onSearchChange={onSearchChange} />
      <div className="tc bg-white-90  code dib br3 pb1 ma3 bw2 shadow-5 region">
        <h2>{region}</h2>
        <ul className='list'>
          {countryNames}
        </ul>
        <a className="f6 link dim br-pill ph4 pv2 mb2 dib white bg-purple"
          onClick={this.handleOnClick} href="history.go(-1)">BACK</a>
      </div>

<<<<<<< HEAD
  return(
    <div className='tc bg-light-purple code dib br3 pa3 ma4 grow bw2 shadow-5 region'>
      <h2>{region}</h2>
      <ul className='list'>
        {countryNames}
      </ul>
=======
>>>>>>> a7a3181fa2e51591db21199d03dca82cbe86ee89
    </div>
  )

};

export default Region;
