import React, { Component } from "react";
import AppRouter from "./routes/AppRouter";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regionList: [],
      countryList: [],
      flagList: [],
      countries: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(response => response.json())
      .then(countries => {
        let regionList = [];
        let countryList = [];
        let flagList = [];
        countries.forEach(country => {
          regionList.push(country.region);
          countryList.push(country.name);
          flagList.push(country.flag);
        });
        this.setState({ countries });
        this.setState({ regionList: this.findUniqRegions(regionList) });
        this.setState({ countryList });
        // this.setState({ flagList });
      });
  }

  findUniqRegions = regionList => {
    const newRegionList = regionList.filter(region => {
      return region !== "";
    });
    return Array.from(new Set(newRegionList)).sort();
  };

  onSearchChange = event => {
    const text = event.target.value.toLowerCase();
    this.setState({ searchField: text });
  };

  render() {
    return (
      <AppRouter onSearchChange={this.onSearchChange} state={this.state} />
    );
  }
}

export default App;
