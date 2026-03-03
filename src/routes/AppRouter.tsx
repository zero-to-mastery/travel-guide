import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Region from "../components/Region"
import RegionList from "../components/RegionList"
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import Detail from "../components/CountryDetails/Detail"
import Credits from "../components/Credits"
import { WorldMap } from "../components/MapView/MapView"

function AppRouter({
  onSearchChange,
  regionList,
  countryList,
  flagList,
  countries,
  searchField,
}) {
  const regions = [
    "/travel-guide/africa",
    "/travel-guide/americas",
    "/travel-guide/antarctic",
    "/travel-guide/antarctic-ocean",
    "/travel-guide/asia",
    "/travel-guide/europe",
    "/travel-guide/oceania",
    "/travel-guide/polar",
  ]

  const routes = regions.map((region, index) => {
    const regionName = region.replace("/travel-guide/", "")
      .replace(/-/g, " ")
      .replace(/\b\w/g, l => l.toUpperCase())

    return (
      <Route
        key={index}
        path={region}
        render={() => (
          <Region
            onSearchChange={onSearchChange}
            search={searchField}
            region={regionName}
            countries={countries}
          />
        )}
      />
    )
  })

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route
            path="/travel-guide"
            exact={true}
            render={() => (
              <RegionList countries={countries} regions={regionList} />
            )}
          />
          {routes}
          <Route
            exact
            path="/travel-guide/detail/:id"
            render={() => <Detail />}
          />
          <Route
            exact
            path="/travel-guide/map"
            render={() => <WorldMap countries={countries} />}
          />
          <Route
            exact
            path="/travel-guide/credits"
            render={() => <Credits />}
          />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default AppRouter