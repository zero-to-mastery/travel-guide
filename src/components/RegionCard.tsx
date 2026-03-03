import React from "react";
import { Link } from "react-router-dom";
import "../styles/Region.css";
import type { Country } from "../../src/types/index";

const initialProps = {
  image: {
    Africa:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Africa_%28orthographic_projection%29.svg/550px-Africa_%28orthographic_projection%29.svg.png",
    Americas:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Americas_%28orthographic_projection%29.svg/1200px-Americas_%28orthographic_projection%29.svg.png",
    Antarctic:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/Antarctica_%28orthographic_projection%29.svg",
    "Antarctic Ocean":
      "https://upload.wikimedia.org/wikipedia/commons/2/28/Location_Southern_Ocean.svg",
    Asia:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Asia_%28orthographic_projection%29.svg/220px-Asia_%28orthographic_projection%29.svg.png",
    Europe:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg/220px-Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg.png",
    Oceania:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Oceania_%28orthographic_projection%29.svg/400px-Oceania_%28orthographic_projection%29.svg.png",
    Polar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Antarctica_%28orthographic_projection%29.svg/250px-Antarctica_%28orthographic_projection%29.svg.png",
  } as Record<string, string>,
};

type RegionCardProps = {
  name: string;
  countryList: Country[];
};

export default function RegionCard({ name, countryList }: RegionCardProps) {
  const countriesToDisplay = [...countryList]
    .sort((a, b) => b.population - a.population)
    .map((country) => country.name.common)
    .slice(0, 10);

  const path = `/travel-guide/${name.replaceAll(" ", "_").toLowerCase()}`;
  const imageSrc = initialProps.image[name];

  return (
    <div className="tc bg-light-100 b--dashed b--white-70 code dib br3 pb1 ma3 grow bw2 shadow-5 region-card">
      <h2 className="h2black">{name}</h2>

      {/* guard prevents crashes if a region key doesn't exist */}
      {imageSrc ? (
        <img src={imageSrc} className="h3 p0 w3 dib" alt="" />
      ) : null}

      <div className="ph4 mv3 white lh-title">
        {countriesToDisplay.join(", ")}
      </div>

      <Link
        className="f6 link dim br-pill ph4 pv2 mb2 dib black bg-white"
        to={path}
      >
        View More
      </Link>
    </div>
  );
}