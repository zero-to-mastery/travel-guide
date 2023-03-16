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

    axios.get(`https://restcountries.com/v2/name/${id}`).then((response) => {
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

  !details ? (
    <Loader />
  ) : (
    <div className="region-details">
      <img
        alt={details.region}
        src={details.flag}
        height="100"
        width="200"
      />
      <h1>{this.props.match.params.id}</h1>
      <div className="ma3 pa4 br3 grow f4 ph3 pv2 dib shadow-5 ba tc">
        <h3>Population</h3>
        <p>{details.population.toLocaleString()}</p>
      </div>
      <div className="ma3 pa4 br3 grow f4 ph3 pv2 dib shadow-5 ba tc">
        <h3>Capital</h3>
        <p>{details.capital}</p>
      </div>
      <div className="ma3 pa4 br3 grow f4 ph3 pv2 dib shadow-5 ba tc">
        <h3>Call Code</h3>
        <p>{details.callingCodes}</p>
      </div>
      <div className="ma3 pa4 br3 grow f4 ph3 pv2 dib shadow-5 ba tc">
        <h3>Region</h3>
        <p>{details.region}</p>
      </div>
      <div className="ma3 pa4 br3 grow f4 ph3 pv2 dib shadow-5 ba tc">
        <h3>Native</h3>
        <p>{details.demonym}</p>
      </div>
      <div className="ma3 pa4 br3 grow f4 ph3 pv2 dib shadow-5 ba tc">
        <h3>Languages</h3>
        <p>
          {details.languages
            .map((language) => `${language.nativeName}`)
            .join(", ")}
        </p>
      </div>
      <div className="ma3 pa4 br3 grow f4 ph3 pv2 dib shadow-5 ba tc">
        <h3>Currencies</h3>
        <p>
          {details.currencies
            .map((currency) => `${currency.name} (${currency.code})`)
            .join(", ")}
        </p>
      </div>
      <div className="ma3 pa4 br3 grow f4 ph3 pv2 dib shadow-5 ba tc">
        <h3>Time Zone(s)</h3>
        <p>{details.timezones.join(", ")}</p>
      </div>

      <CountryMap
        countryName={details.name}
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
