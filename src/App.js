import React, { Component } from "react";
import AppRouter from "./routes/AppRouter";
import "./App.css";
import 'tachyons';

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

        countries.map((list, i) => {
          const { region, name, flag } = list
          return (
            regionList.push(region),
            countryList.push(name),
            flagList.push(flag)
          );
        }); 
        this.setState({ countries: countries });
        this.setState({ regionList: this.findUniqRegions(regionList) });
        this.setState({ countryList });
        this.setState({ flagList });
      });

  }

 findUniqRegions = (regionList) => { 
     return Array.from(new Set(regionList.filter(region => region !== "").sort()));
   }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value.toLowerCase() });
  };

  render() {
    return (
      <AppRouter onSearchChange={this.onSearchChange} state={this.state} />
    );
  }
}

export default App;
