import React from 'react';
import { Redirect } from 'react-router-dom';
import '../styles/Region.css';

export default class RegionCard extends React.Component {
  constructor({ name, countryList }) {
    super();
    this.state = {
      countries: countryList.map(country => <li>{country.name}</li>),
      region: name,
      path: `/${name.toLowerCase()}`
    }
  }

  handleOnClick = () => {
    this.setState({ redirect: true });
  }
  render() {
    if (this.state.redirect) {
      return <Redirect push to={this.state.path} />;
    }
    return (
      <div className="tc bg-light-purple code dib br3 pa3 ma2 grow bw2 shadow-5 region-card"
        onClick={this.handleOnClick}>
        <h2>{this.state.region}</h2>
        <ul className="list pl0">
          {
            this.state.countries.length < 13 ? this.state.countries :
              this.state.countries.splice(0, 12)
          }
        </ul>
        <h3>View More</h3>
      </div>
    )
  }
};