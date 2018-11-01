import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Region from '../components/Region';
import RegionList from '../components/RegionList';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

export default (props) => {
    const regions = ['/africa', '/americas', '/asia', '/europe', '/oceania', '/polar'];
    const routes = regions.map((region, index) => {
        return (
            <Route key={index} path={region}
              render={() => (
                <Region
                  onSearchChange={props.onSearchChange}
                  search={props.state.searchField}
                  region={props.state.regionList[index]}
                  countries={props.state.countries}
                />
              )}
            />
        );
    });
    
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact={true}
              render={() => (
                <RegionList
                  countries={props.state.countries}
                  regions={props.state.regionList}
                />
              )}
            />
            {routes}
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
}
