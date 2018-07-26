import React from 'react';
import { Redirect } from 'react-router-dom';
import '../styles/Region.css';

export default class RegionCard extends React.Component {
  constructor({ name, countryList }) {
    super();
    this.state = {
      countries: countryList.map(country => <li key={country.name}>{country.name}</li>),
      region: name,
      path: `/${name.toLowerCase()}`,
      image: "http://guidebycell.com/wp-content/uploads/2015/12/GBC_Engagement_Icon.png"
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
      <div className="tc bg-white-90  code dib br3 pb1 ma3 grow bw2 shadow-5 region-card"
        onClick={this.handleOnClick}>
        <img src={this.state.image} className=" h3 p0 w3 dib" alt=""/>
        <h2>{this.state.region}</h2>
        <ul className="list pl0">
          {
            this.state.countries.length < 11 ? this.state.countries :
              this.state.countries.splice(0, 10)
          }
        </ul>
        
        <a className="f6 link dim br-pill ph4 pv2 mb2 dib white bg-purple" href="#0">View More</a>
      </div>
    )
  }
};