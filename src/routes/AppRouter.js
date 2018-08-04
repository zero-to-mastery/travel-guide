import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Region from '../components/Region';
import RegionList from '../components/RegionList';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import SearchBox from '../components/SearchBox';

export default ({ onSearchChange , state , regionarr}) => (
  <BrowserRouter>
    <div>
      <Header />
      <SearchBox onSearchChange={onSearchChange}/>
      <Switch>
        <Route path="/" exact={true}
          render={() => (
            <RegionList
              countries={state.countries}
              regions={state.regionList}
              regionarr={regionarr}
            />
          )}
        />
        <Route path="/africa"
          render={() => (
            <Region
              region={state.regionList[0]}
              countries={state.countries}
            />
          )}
        />
        <Route path="/americas"
          render={() => (
            <Region
              region={state.regionList[1]}
              countries={state.countries}
            />
          )}
        />
        <Route path="/asia"
          render={() => (
            <Region
              region={state.regionList[2]}
              countries={state.countries}
            />
          )}
        />
        <Route path="/europe"
          render={() => (
            <Region
              region={state.regionList[3]}
              countries={state.countries}
            />
          )}
        />
        <Route path="/oceania"
          render={() => (
            <Region
              region={state.regionList[4]}
              countries={state.countries}
            />
          )}
        />
        <Route path="/polar"
          render={() => (
            <Region 
              region={state.regionList[5]}
              countries={state.countries}
            />
          )}
        />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
)