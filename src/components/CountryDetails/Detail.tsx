import React, { useState, useEffect } from "react";
import "../../styles/Region.css";
import Loader from "../utils/Loader";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { CountryMap } from "../MapView/MapView";
import { Country } from "../../../src/types/index";

const Detail = () => {
  const params = useParams() as { id: string };
  const id = params.id;
  const [details, setDetails] = useState(null as Country | null);

  useEffect(() => {
    const controller = new AbortController();

    if (id) {
      axios
        .get(
          `https://restcountries.com/v3.1/name/${id}?fields=name,flags,region,latlng,capital,population,currencies,languages,borders,cca3,timezones,demonyms,idd`,
        { signal: controller.signal }
        )
        .then((response) => {
          let data = response.data[0];

          if (id?.toLowerCase() === "india") {
            data = response.data[1];
            data.population = 1380879389;
          }
          if (id === "Sudan") {
            data = response.data[1];
          }
          if (id === "United Kingdom of Great Britain and Northern Ireland") {
            data = { ...data, timezones: ["UTC", "UTC+01:00"] };
          }
          if (id === "Timor-Leste") {
            data = {
              ...data,
              currencies: {
                USD: { name: "United States dollar", symbol: "$" },
              },
            };
          }
          if (id === "French Southern Territories") {
            data = { ...data, callingCodes: ["262"] };
          }

          setDetails(data);
        })
        .catch((err) => console.log("Error fetching country:", err));
      return () => {
        controller.abort();
      };
    }
  }, [id]);

  if (!details) return <Loader />;

  return (
    <div className="centerflex">
      <div className="tc bg-white-90 detailCard code dib br3 pb1 mt3 mb3 bw2 shadow-5 region">
        <div className="region-details">
          <img
            alt={details.region}
            src={details.flags.svg}
            height="100"
            width="200"
          />
          <h1>{details.name.common}</h1>
          <div className="ma3 pa4 br3 grow f4 ph3 pv2 dib shadow-5 ba tc">
            <h3>Population</h3>
            <p>{details.population.toLocaleString()}</p>
          </div>
          <div className="ma3 pa4 br3 grow f4 ph3 pv2 dib shadow-5 ba tc">
            <h3>Capital</h3>
            <p>{details.capital[0]}</p>
          </div>
          <div className="ma3 pa4 br3 grow f4 ph3 pv2 dib shadow-5 ba tc">
            <h3>Call Code</h3>
            <p>{details.idd.root}</p>
          </div>
          <div className="ma3 pa4 br3 grow f4 ph3 pv2 dib shadow-5 ba tc">
            <h3>Region</h3>
            <p>{details.region}</p>
          </div>
          <div className="ma3 pa4 br3 grow f4 ph3 pv2 dib shadow-5 ba tc">
            <h3>Native</h3>
            <p>{details.demonyms.eng.m}</p>
          </div>
          <div className="ma3 pa4 br3 grow f4 ph3 pv2 dib shadow-5 ba tc">
            <h3>Languages</h3>
            <p>{Object.values(details.languages).join(", ")}</p>
          </div>
          <div className="ma3 pa4 br3 grow f4 ph3 pv2 dib shadow-5 ba tc">
            <h3>Currencies</h3>
            <p>
              {Object.values(details.currencies)
                .map((c) => `${c.name} (${c.symbol})`)
                .join(", ")}
            </p>
          </div>
          <div className="ma3 pa4 br3 grow f4 ph3 pv2 dib shadow-5 ba tc">
            <h3>Time Zone(s)</h3>
            <p>{details.timezones.join(", ")}</p>
          </div>
          {details && (
            <CountryMap
              countryName={details.name.common}
              lat={details.latlng[0]}
              lng={details.latlng[1]}
            />
          )}

          <Link
            className="f6 link dim br-pill ph4 pv2 mb2 dib white bg-purple"
            to={`/travel-guide/${details.region.toLowerCase()}`}
          >
            BACK
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
