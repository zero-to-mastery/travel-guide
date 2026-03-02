import React from "react";
import "../../styles/Region.css";
import Loader from "../utils/Loader";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import { CountryMap } from "../MapView/MapView";

class Detail extends React.Component {
  state = {
    details: null,
  };

  componentDidMount = () => {
    const { id } = this.props.match.params;

    axios.get(`https://restcountries.com/v3.1/name/${id}?fields=name,flags,region,latlng,capital,population,currencies,languages,borders,cca3,timezones,demonyms,idd`).then((response) => {
      console.log("RAW DATA:", JSON.stringify(response.data[0], null, 2)) 
      if (id.toLowerCase() === "india") {
        response.data[1].population = 1380879389;
        this.setState({ details: response.data[1] });
      } else {
        this.setState({ details: response.data[0] });
      }
      if (id === "Sudan") {
        this.setState({ details: response.data[1] });
      }
      if (id === "United Kingdom of Great Britain and Northern Ireland") {
        this.setState((prevState) => ({
          details: {
            ...prevState.details,
            timezones: ["UTC", "UTC+01:00"],
          },
        }));
      }
      if (id === "Timor-Leste") {
        this.setState((prevState) => ({
          details: {
            ...prevState.details,
            currencies: [
              { code: "USD", name: "United States dollar", symbol: "$" },
            ],
          },
        }));
      }
      if (id === "French Southern Territories") {
        this.setState((prevState) => ({
          details: {
            ...prevState.details,
            callingCodes: ["262"],
          },
        }));
      }
    });
  };

  renderDetail = () => {
  const { details } = this.state;

  return !details ? (
    <Loader />
  ) : (
    <div className="region-details">
      <img
        alt={details.region}
        src={details.flags.svg}
        height="100"
        width="200"
      />
      <h1>{details.name.common}</h1>
      <div className="ma3 pa4 br3 grow f4 ph3 pv2 dib shadow-5 ba tc">
        <h3>Population</h3>
        <p>{details.population.toLocaleString()}</p>
      </div>
      <div className="ma3 pa4 br3 grow f4 ph3 pv2 dib shadow-5 ba tc">
        <h3>Capital</h3>
        <p>{details.capital[0]}</p>
      </div>
      <div className="ma3 pa4 br3 grow f4 ph3 pv2 dib shadow-5 ba tc">
        <h3>Call Code</h3>
        <p>{details.idd.root}</p>
      </div>
      <div className="ma3 pa4 br3 grow f4 ph3 pv2 dib shadow-5 ba tc">
        <h3>Region</h3>
        <p>{details.region}</p>
      </div>
      <div className="ma3 pa4 br3 grow f4 ph3 pv2 dib shadow-5 ba tc">
        <h3>Native</h3>
        <p>{details.demonyms.eng.m}</p>
      </div>
      <div className="ma3 pa4 br3 grow f4 ph3 pv2 dib shadow-5 ba tc">
        <h3>Languages</h3>
        <p>{Object.values(details.languages).join(", ")}</p>
      </div>
      <div className="ma3 pa4 br3 grow f4 ph3 pv2 dib shadow-5 ba tc">
        <h3>Currencies</h3>
        <p>{Object.values(details.currencies).map(c => `${c.name} (${c.symbol})`).join(", ")}</p>
      </div>
      <div className="ma3 pa4 br3 grow f4 ph3 pv2 dib shadow-5 ba tc">
        <h3>Time Zone(s)</h3>
        <p>{details.timezones.join(", ")}</p>
      </div>

      <CountryMap
        countryName={details.name.common}
        lat={details.latlng[0]}
        lng={details.latlng[1]}
      />

      <Link
        className="f6 link dim br-pill ph4 pv2 mb2 dib white bg-purple"
        to={`/travel-guide/${details.region.toLowerCase()}`}
      >
        BACK
      </Link>
    </div>
  );
};

  render() {
    return (
      <div className="centerflex">
        <div className="tc bg-white-90 detailCard code dib br3 pb1 mt3 mb3 bw2 shadow-5 region">
          {this.renderDetail()}
        </div>
      </div>
    );
  };
}

export default withRouter(Detail);
