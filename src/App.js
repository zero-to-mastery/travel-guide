import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import globe from './Globe.svg';
import AppRouter from './routes/AppRouter'
// import Region from './components/Region';
// import RegionList from './components/RegionList';
// import Header from './components/Header.js'
// import Footer from './components/Footer.js'
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
    console.log(this.state.regionList);
    return <AppRouter state={this.state}/>
  }
}

export default App;
