import React, { Component } from "react";
import AppRouter from "./routes/AppRouter";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regionList: [],
      countryList: [],
      countries: [],
      searchField: ""
    };
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(response => response.json())
      .then(countries => {
        let regionList = [];
        let countryList = [];
        countries.forEach(country => {
          regionList.push(country.region);
          countryList.push(country.name);
        });
        this.setState({ countries: countries });
        this.setState({ regionList: this.findUniqRegions(regionList) });
        this.setState({ countryList: countryList });
      });
  }

  findUniqRegions = regionList => {
    const newRegionList = regionList.filter(region => {
      return region !== "";
    });
    return Array.from(new Set(newRegionList)).sort();
  };

  onSearchChange = text => {
    console.log(this.state.searchField);
    this.setState({ searchField: text });
  };

  render() {
    return (
      <AppRouter
        onSearchChange={this.onSearchChange}
        state={this.state}
      />
    );
  }
}

export default App;
