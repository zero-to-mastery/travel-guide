import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Region.css';

const initialProps = {
  image: {
    Africa:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Africa_%28orthographic_projection%29.svg/550px-Africa_%28orthographic_projection%29.svg.png',
    Americas:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Americas_%28orthographic_projection%29.svg/1200px-Americas_%28orthographic_projection%29.svg.png',
    Antarctic:
      'https://upload.wikimedia.org/wikipedia/commons/f/f2/Antarctica_%28orthographic_projection%29.svg',
    'Antarctic Ocean':
      'https://upload.wikimedia.org/wikipedia/commons/2/28/Location_Southern_Ocean.svg',
    Asia: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Asia_%28orthographic_projection%29.svg/220px-Asia_%28orthographic_projection%29.svg.png',
    Europe:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg/220px-Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg.png',
    Oceania:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Oceania_%28orthographic_projection%29.svg/400px-Oceania_%28orthographic_projection%29.svg.png',
    Polar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Antarctica_%28orthographic_projection%29.svg/250px-Antarctica_%28orthographic_projection%29.svg.png',
  },
};

const RegionCard = ({ name, countryList }) => {
  const [countries, setCountries] = useState(
    countryList
      .sort((a, b) => {
        return b.population - a.population;
      })
      .map((country) => {
        return country.name;
      })
  );
  const [region] = useState(name);
  const [redirect, setRedirect] = useState(false);
  const [path] = useState(
    `/travel-guide/${name.replaceAll(' ', '_').toLowerCase()}`
  );

  const handleOnClick = () => {
    setRedirect(true);
  };

  const displayCountries = () => {
    let countriesToDisplay = [];
    let y = countries.length > 10 ? 10 : countries.length;
    for (var x = 0; x < y; x++) {
      countriesToDisplay.push(countries[x]);
    }
    return countriesToDisplay;
  };

  return (
    <div
      className="tc bg-light-100 b--dashed b--white-70 code dib br3 pb1 ma3 grow bw2 shadow-5 region-card"
      onClick={handleOnClick}
    >
      <h2 className="h2black">{region}</h2>

      <img src={initialProps.image[region]} className="h3 p0 w3 dib" alt="" />

      <div className="ph4 mv3 white lh-title">
        {displayCountries().join(', ')}
      </div>

      <Link
        className="f6 link dim br-pill ph4 pv2 mb2 dib black bg-white"
        to={path}
      >
        View More
      </Link>
    </div>
  );
};

export default RegionCard;
