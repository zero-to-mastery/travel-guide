import React from 'react';
import '../styles/Region.css';

const Region = ({name}) => {
  return(
    <div className='region'>
      <h2>{name}</h2>
    </div>
  )
};

export default Region;
