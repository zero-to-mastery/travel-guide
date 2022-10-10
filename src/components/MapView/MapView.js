import React from 'react';
import { Link } from 'react-router-dom';

import './MapView.css';

import 'ol/ol.css';
import Map from 'ol/Map';
import Overlay from 'ol/Overlay';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';

class CountryMap extends React.Component {
  componentDidMount() {
    var view = new View({
      center: [0, 0],
      zoom: 4,
    });

    var layer = new TileLayer({
      source: new OSM(),
    });

    var map = new Map({
      target: 'map',
      layers: [layer],
      view: view,
    });

    const { lat, lng } = this.props;
    const lnglat = [lng, lat];

    var pos = fromLonLat(lnglat);
    view.setCenter(pos);

    // Country marker
    var marker = new Overlay({
      position: pos,
      positioning: 'center-center',
      element: document.getElementById('marker'),
      stopEvent: false,
    });
    map.addOverlay(marker);

    // Country label
    var markerText = new Overlay({
      position: pos,
      element: document.getElementById('markerText'),
    });
    map.addOverlay(markerText);
  }

  render() {
    const { countryName } = this.props;
    return (
      <div>
        <div id='map' className='map'></div>
        <div className='mapLabelArea'>
          <p id='markerText' className='markerText'>
            {countryName}
          </p>
          <div id='marker' className='marker' title='Marker'></div>
        </div>
      </div>
    );
  }
}

class WorldMap extends React.Component {
  componentDidMount() {
    var view = new View({
      center: [0, 0],
      zoom: 0,
    });

    var layer = new TileLayer({
      source: new OSM(),
    });

    var map = new Map({
      target: 'map',
      layers: [layer],
      view: view,
    });

    this.mountMarkers(map);
  }

  mountMarkers = (map) => {
    return this.props.countries.map((country) => {
      if (!country.hasOwnProperty('latlng')) return;

      const lnglat = [country.latlng[1], country.latlng[0]];

      var pos = fromLonLat(lnglat);

      // Country marker
      var marker = new Overlay({
        position: pos,
        positioning: 'center-center',
        element: document.getElementById(`marker_${country.alpha3Code}`),
        stopEvent: false,
      });
      return map.addOverlay(marker);
    });
  };

  renderMarkers = () => {
    return this.props.countries.map((country, i) => {
      return (
        <div key={`markerDiv_${country.alpha3Code}`} className='mapLabelArea'>
          <Link key={country.name} to={`/travel-guide/detail/${country.name}`}>
            <div
              id={`marker_${country.alpha3Code}`}
              className='smallMarker'
              data-title={`Name: ${
                country.name
              }\nPopulation: ${country.population.toLocaleString()}\nCapital: ${
                country.capital
              }\nRegion: ${country.region}\nNative: ${country.demonym}`}
            ></div>
          </Link>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div id='map' className='worldMap'></div>
        {this.renderMarkers()}
      </div>
    );
  }
}

export { CountryMap, WorldMap };
