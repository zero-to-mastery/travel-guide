import React, { Component } from 'react';
import AppRouter from './routes/AppRouter'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      regionList: [],
      countryList: [],
      searchField: '',
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
        this.setState({countryList: countryList});
      });
      
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
   
    
  }

  findUniqRegions = (regionList) => {
    const newRegionList = regionList.filter(region => {
      return region !== "";
    });
    return Array.from(new Set(newRegionList)).sort();
  }

  render() {
    let filteredRegionList = [];
    this.state.countries.forEach((country, i) =>{
       if(this.state.countries[i].name.toLowerCase().includes(this.state.searchField.toLowerCase()) && this.state.countries[i].region !== "")
       {
        filteredRegionList.push(this.state.countries[i].region);
       }     
     });
    
      let filteredRegionSet = new Set( filteredRegionList );
      let regionarr = Array.from(filteredRegionSet);
      
    // return (    
    //   <div className='tc'>
    //     <Header />
    //     <SearchBox searchChange={this.onSearchChange}/>
    //     <RegionList countries={filteredCountries} 
    //       regions={this.state.regionList}>
    //     </RegionList>        
    //     <Footer />     
    //   </div>
    // );
    return <AppRouter onSearchChange={this.onSearchChange} state={this.state} regionarr = {regionarr}/>
  }
}

export default App;
