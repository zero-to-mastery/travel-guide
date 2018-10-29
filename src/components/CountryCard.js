import React from 'react';
import '../styles/CountryCard.css';

const CountryCard = (props) => (
    <div className='card'>
        <p className="card-text">{props.countryData.name}</p>
    </div>
);

export default CountryCard;