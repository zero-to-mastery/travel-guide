import React from "react";
import "../styles/CountryCard.css";

const CountryCard = props => {
  const bcg = {
    backgroundImage: `url(${props.countryData.flag})`,
    backgroundSize: "184px auto",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    cursor: "pointer",
    color: "black"
  };
 
  const stl = {
    cursor: "pointer",
    color: "black",
    fontSize: 15,
    margin: 0
  };

  const tooltipTxt = {
    header: `Population: ${props.countryData.population}`,
    langTxt: `Primary Language: ${props.countryData.languages[0].name}`,
    latLng: `Lat, Lng: ${props.countryData.latlng}`,
  };
  
  return (
		<div className='card'>
				<div className='tooltip'>
        <div className='card__title'>
				<h1 style={stl}>{props.countryData.name}</h1>
					<div className='bottom'> 
						{/* <img src='cssttp/css-tooltip-image.jpg' />  add an image API/collection for tooltip in the future  */}
						<h3>{tooltipTxt.header}</h3>
						<p>{tooltipTxt.langTxt}</p>
            <br/>
            <p>{tooltipTxt.latLng}</p>
						<i></i>
					</div>
				</div>
			</div>
			<div style={bcg} className='card__image'></div>
		</div>
	);
};

export default CountryCard;
