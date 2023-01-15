import React, { useState, useEffect } from "react"
import AppRouter from "./routes/AppRouter"
import "./App.css"
import "tachyons"

function App() {
  const [regionList, setRegionList] = useState([])
  const [countryList, setCountryList] = useState([])
  const [flagList, setFlagList] = useState([])
  const [countries, setCountries] = useState([])
  const [searchField, setSearchField] = useState("")
  const [userLocation, setUserLocation] = useState([])
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((countries) => {
        setLoading(false)
        let regionList = []
        let countryList = []
        let flagList = []

        countries.map((list, i) => {
          const { region, name, flag } = list
          return (
            regionList.push(region), countryList.push(name), flagList.push(flag)
          )
        })

        setCountries(countries)
        setRegionList(findUniqRegions(regionList))
        setCountryList(countryList)
        setFlagList(flagList)
        navigator.geolocation.getCurrentPosition(function (position) {
          setUserLocation(position.coords)
        })
      })
      .catch((error) => console.log(error))
  }, [])

  const findUniqRegions = (regionList) => {
    const result = Array.from(
      new Set(regionList.filter((region) => region !== "").sort())
    )
    // console.log(result)
    return result
  }

  if (Loading) {
    return <h1 className="f1 dark-blue b--dotted">...LOADING</h1>
  }

  const onSearchChange = (event) => {
    setSearchField(event.target.value.toLowerCase())
  }

  return (
    <AppRouter
      onSearchChange={onSearchChange}
      regionList={regionList}
      countryList={countryList}
      flagList={flagList}
      countries={countries}
      searchField={searchField}
      userLocation={userLocation}
    />
  )
}

export default App
