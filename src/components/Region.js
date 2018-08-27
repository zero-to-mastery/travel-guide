import React from 'react';
import '../styles/Region.css';



const Region = ({region, countries}) => {
  let countryList = countries.filter(country => country.region === region);
  let countryNames = countryList.map(country => <li key={country.name}>{country.name}</li>);
 
  
  

 


  return(
    <div className="centerFlex">
    <div className="tc bg-white-90  code dib br3 pb1 ma3 bw2 shadow-5 region"
     >
      <h2>{region}</h2>
      <ul className='list'>
        {countryNames}
      </ul>
      <a className="f6 link dim br-pill ph4 pv2 mb2 dib white bg-purple"
      onClick={this.handleOnClick} href="history.go(-1)">BACK</a>
    </div>
   
    </div>
  )
  
};


export default Region;
