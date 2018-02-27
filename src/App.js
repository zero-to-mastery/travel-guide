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
    const newRegionList = regionList.filter(region => {
      return region !== "";
    });
    return Array.from(new Set(newRegionList)).sort();
  }

  render() {
    return (
    
      <div className="tc">

        <header className="bg-purple white-80 tc pv4 avenir">
        
  
  <h1 className="mt2 mb3 baskerville i fw1 f1">Travel Guide</h1>
  <img src={globe} className="App-logo" alt="logo" />

  
  <nav className="bt bb tc mw8 center mt4">
    <a className="f6 f5-l link bg-animate white-80 hover-bg-light-purple dib pa3 ph4-l" href="#">Africa</a>
    <a className="f6 f5-l link bg-animate white-80 hover-bg-light-purple dib pa3 ph4-l" href="#">Americas</a>
    <a className="f6 f5-l link bg-animate white-80 hover-bg-light-purple dib pa3 ph4-l" href="#">Asia</a>
    <a className="f6 f5-l link bg-animate white-80 hover-bg-light-purple dib pa3 ph4-l" href="#">Oceana</a>
    <a className="f6 f5-l link bg-animate white-80 hover-bg-light-purple dib pa3 ph4-l" href="#">Polar</a>
  </nav>
</header>



        
        <RegionList countries={this.state.countries} regions={this.state.regionList}>
        </RegionList>

        
          
     
      </div>
    );
  }
}

export default App;
