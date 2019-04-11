import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Region from "../components/Region";
import RegionList from "../components/RegionList";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Detail from '../components/CountryDetails/Detail';

export default props => {
  const regions = [
    "/travel-guide/africa",
    "/travel-guide/americas",
    "/travel-guide/asia",
    "/travel-guide/europe",
    "/travel-guide/oceania",
    "/travel-guide/polar"
  ];
  const routes = regions.map((region, index) => {
    return (
      <Route
        key={index}
        path={region}
        render={() => (
          <Region
            onSearchChange={props.onSearchChange}
            search={props.state.searchField}
            region={props.state.regionList[index]}
            countries={props.state.countries}
            flags={props.state.flagList}
            names={props.state.contryList}
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
          <Route
            path="/travel-guide"
            exact={true}
            render={() => (
              <RegionList
                countries={props.state.countries}
                regions={props.state.regionList}
              />
            )}
          />
          {routes}
          <Route  exact path="/travel-guide/detail/:id" render={() => (
              <Detail 
                  flags={props.state.flagList}
                  countries={props.state.countries}
                />
               )}
              />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
