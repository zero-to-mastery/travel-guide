import React, { Component } from 'react';
import globe from './Globe.svg';
import RegionList from './components/RegionList';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      regionList: [],
      countryList: [],
      countries: []
    };
  }

  componentDidMount(){
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => {
        return response.json();
      })
      .then(countries => {
        let regionList = [];
        let countryList = [];
        countries.forEach(country => {
          regionList.push(country.region);
          countryList.push(country.name);
        });
        this.setState({countries: countries});
        this.setState({regionList: this.findUniqRegions(regionList)});
        this.setState({countryList: countryList})
      });
  }

  findUniqRegions = (regionList) => {
    return Array.from(new Set(regionList)).sort();
  }

  render() {
    return (
      <div className="tc">
        <header className="App-header">
          <img src={globe} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Travel Guide</h1>
            <p className="App-intro">
              Pick a region
            </p>
        </header>
        <RegionList regions={this.state.regionList} />
      </div>
    );
  }
}

export default App;
