import React from "react";
import { Link } from "react-router-dom";
import "../styles/Region.css";

const initialProps = {
  image: {
    Africa:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Africa_%28orthographic_projection%29.svg/550px-Africa_%28orthographic_projection%29.svg.png",
    Americas:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Americas_%28orthographic_projection%29.svg/1200px-Americas_%28orthographic_projection%29.svg.png",
    Asia:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Asia_%28orthographic_projection%29.svg/220px-Asia_%28orthographic_projection%29.svg.png",
    Europe:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg/220px-Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg.png",
    Oceania:
      "https://upload.wikimedia.org/wikipedia/commons/c/c2/BK_Oceania_%28orthographic_projection%29.png",
    Polar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Antarctica_%28orthographic_projection%29.svg/250px-Antarctica_%28orthographic_projection%29.svg.png"
  }
};
export default class RegionCard extends React.Component {
  constructor({ name, countryList }) {
    super();
    this.state = {
      countries: countryList.map(country => (
        <li key={country.name}>{country.name}</li>
      )),
      region: name,
      path: `/travel-guide/${name.toLowerCase()}`
    };
  }

  handleOnClick = () => {
    this.setState({ redirect: true });
  };

  render() {
    return (
      <div
        className="tc bg-white-90  code dib br3 pb1 ma3 grow bw2 shadow-5 region-card"
        onClick={this.handleOnClick}
      >
        <img
          src={initialProps.image[this.state.region]}
          className=" h3 p0 w3 dib"
          alt=""
        />
        <h2>{this.state.region}</h2>
        <ul className="list pl0">
          {this.state.countries.length < 11
            ? this.state.countries
            : this.state.countries.splice(0, 10)}
        </ul>

        <Link
          className="f6 link dim br-pill ph4 pv2 mb2 dib white bg-purple"
          to={`${this.state.path}`}
        >
          View More
        </Link>
      </div>
    );
  }
}
