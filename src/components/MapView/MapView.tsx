import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "./MapView.css";

import "ol/ol.css";
import Map from "ol/Map";
import Overlay from "ol/Overlay";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import { fromLonLat } from "ol/proj";
import OSM from "ol/source/OSM";

type CountryMapProps = {
  countryName: string;
  lat: number;
  lng: number;
};

export function CountryMap({ countryName, lat, lng }: CountryMapProps) {
  const mapElRef = useRef<HTMLDivElement | null>(null);
  const markerElRef = useRef<HTMLDivElement | null>(null);
  const markerTextElRef = useRef<HTMLParagraphElement | null>(null);

  // Create map once
  const mapRef = useRef<Map | null>(null);

  useEffect(() => {
    if (!mapElRef.current) return;

    const view = new View({
      center: [0, 0],
      zoom: 4,
    });

    const layer = new TileLayer({
      source: new OSM(),
    });

    const map = new Map({
      target: mapElRef.current,
      layers: [layer],
      view,
    });

    // Marker overlay
    if (markerElRef.current) {
      const marker = new Overlay({
        positioning: "center-center",
        element: markerElRef.current,
        stopEvent: false,
      });
      map.addOverlay(marker);
    }

    // Label overlay
    if (markerTextElRef.current) {
      const markerText = new Overlay({
        element: markerTextElRef.current,
      });
      map.addOverlay(markerText);
    }

    mapRef.current = map;

    return () => {
      map.setTarget(undefined);
      mapRef.current = null;
    };
  }, []);

  // Update position when lat/lng changes
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const view = map.getView();
    const pos = fromLonLat([lng, lat]);
    view.setCenter(pos);

    // Update overlays (0 = marker, 1 = text) in the order we added them
    const overlays = map.getOverlays().getArray();
    overlays.forEach((ov) => ov.setPosition(pos));
  }, [lat, lng]);

  return (
    <div>
      <div ref={mapElRef} className="map" />
      <div className="mapLabelArea">
        <p ref={markerTextElRef} className="markerText">
          {countryName}
        </p>
        <div ref={markerElRef} className="marker" title="Marker" />
      </div>
    </div>
  );
}

/** This matches what your WorldMap code uses today */
type WorldMapCountry = {
  latlng: [number, number];
  alpha3Code: string;
  name: string;
  population: number;
  capital: string;
  region: string;
  demonym: string;
};

type WorldMapProps = {
  countries: WorldMapCountry[];
};

export function WorldMap({ countries }: WorldMapProps) {
  const mapElRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<Map | null>(null);

  // We render marker divs with ids; keep that behavior but avoid hard-coded "map" id
  useEffect(() => {
    if (!mapElRef.current) return;

    const view = new View({
      center: [0, 0],
      zoom: 0,
    });

    const layer = new TileLayer({
      source: new OSM(),
    });

    const map = new Map({
      target: mapElRef.current,
      layers: [layer],
      view,
    });

    mapRef.current = map;

    return () => {
      map.setTarget(undefined);
      mapRef.current = null;
    };
  }, []);

  // Mount / re-mount overlays whenever countries change
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    // Clear old overlays before adding new ones
    map.getOverlays().clear();

    countries.forEach((country) => {
      if (!country.latlng) return;

      const pos = fromLonLat([country.latlng[1], country.latlng[0]]);
      const el = document.getElementById(`marker_${country.alpha3Code}`);
      if (!el) return;

      const marker = new Overlay({
        position: pos,
        positioning: "center-center",
        element: el,
        stopEvent: false,
      });

      map.addOverlay(marker);
    });
  }, [countries]);

  return (
    <div>
      <div ref={mapElRef} className="worldMap" />

      {countries.map((country) => (
        <div key={`markerDiv_${country.alpha3Code}`} className="mapLabelArea">
          <Link to={`/travel-guide/detail/${country.name}`}>
            <div
              id={`marker_${country.alpha3Code}`}
              className="smallMarker"
              data-title={`Name: ${
                country.name
              }\nPopulation: ${country.population.toLocaleString()}\nCapital: ${
                country.capital
              }\nRegion: ${country.region}\nNative: ${country.demonym}`}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}