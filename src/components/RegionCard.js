import React from 'react';
import '../styles/Region.css';

export default ({ name, countryList }) => {
   const countries = countryList.map(country => <li>{country.name}</li>)
   
   return (
      <div className="tc bg-light-purple code dib br3 pa3 ma2 grow bw2 shadow-5 region-card">
         <h2>{name}</h2>
         <ul className="list pl0">
            {
               countries.length < 13 ? countries : countries.splice(0,13)
            }
         </ul>
         <h3>View</h3>
      </div>
   )
};