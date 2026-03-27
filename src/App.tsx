import React, { useState, useEffect } from "react";
import AppRouter from "./routes/AppRouter";
import "./App.css";
import "tachyons";

function App() {
  const [regionList, setRegionList] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [flagList, setFlagList] = useState([]);
  const [countries, setCountries] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,region,latlng,capital,population,currencies,languages,borders,cca3",
      {
        headers: { Accept: "application/json" },
        signal: controller.signal
      },
    )
      .then((response) => response.json())
      .then((data) => {
        if (!Array.isArray(data)) {
          console.log("Unexpected response:", data);
          setLoading(false);
          return;
        }
        let regionList = [];
        let countryList = [];
        let flagList = [];

        data.forEach((list) => {
          const { region, name, flags } = list;
          regionList.push(region);
          countryList.push(name.common);
          flagList.push(flags.svg);
        });

        setCountries(data); // ✅ data, not countries
        setRegionList(findUniqRegions(regionList));
        setCountryList(countryList);
        setFlagList(flagList);
        setLoading(false);
        navigator.geolocation.getCurrentPosition((err) =>
          console.log("Geolocation error:", err),
        );
      })
      .catch((error) => console.log(error));

    return () => controller.abort();
  }, []);

  const findUniqRegions = (regionList) => {
    const result = Array.from(
      new Set(regionList.filter((region) => region !== "").sort()),
    );
    // console.log(result)
    return result;
  };

  if (Loading) {
    return <h1 className="f1 dark-blue b--dotted">...LOADING</h1>;
  }

  const onSearchChange = (event) => {
    setSearchField(event.target.value.toLowerCase());
  };

  return (
    <AppRouter
      onSearchChange={onSearchChange}
      regionList={regionList}
      countryList={countryList}
      flagList={flagList}
      countries={countries}
      searchField={searchField}
    />
  );
}

export default App;
