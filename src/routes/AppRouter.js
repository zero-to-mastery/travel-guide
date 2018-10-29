import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Region from '../components/Region';
import RegionList from '../components/RegionList';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

export default (props) => (
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
        <Route path="/africa"
          render={() => (
            <Region
              onSearchChange={() => props.onSearchChange()}
              search={props.state.searchField}
              region={props.state.regionList[0]}
              countries={props.state.countries}
            />
          )}
        />
        <Route path="/americas"
          render={() => (
            <Region
              onSearchChange={() => props.onSearchChange()}
              search={props.state.searchField}
              region={props.state.regionList[1]}
              countries={props.state.countries}
            />
          )}
        />
        <Route path="/asia"
          render={() => (
            <Region
              onSearchChange={() => props.onSearchChange()}
              search={props.state.searchField}
              region={props.state.regionList[2]}
              countries={props.state.countries}
            />
          )}
        />
        <Route path="/europe"
          render={() => (
            <Region
              onSearchChange={() => props.onSearchChange()}
              search={props.state.searchField}
              region={props.state.regionList[3]}
              countries={props.state.countries}
            />
          )}
        />
        <Route path="/oceania"
          render={() => (
            <Region
              onSearchChange={() => props.onSearchChange()}
              search={props.state.searchField}
              region={props.state.regionList[4]}
              countries={props.state.countries}
            />
          )}
        />
        <Route path="/polar"
          render={() => (
            <Region
              onSearchChange={() => props.onSearchChange()}
              search={props.state.searchField} 
              region={props.state.regionList[5]}
              countries={props.state.countries}
            />
          )}
        />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
)