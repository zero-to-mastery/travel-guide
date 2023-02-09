import React from 'react';
import { NavLink, Link } from 'react-router-dom';
// import globe from "../Globe.svg";
import '../styles/Header.css';

const header = () => {
  return (
    <header className="header">
      <div className="logotext">
        <h1
          className=" headertext"
          data-aos="fade-down"
          data-aos-duration="5000"
        >
          <Link to="/travel-guide">Travel guide</Link>
        </h1>
      </div>
      <div>
        <nav className="nav">
          <NavLink
            to="/travel-guide"
            activeClassName="is-active"
            className="f6 f5-l link bg-animate white-80 hover-bg-red  dib pa3 ph4-l ttu"
          >
            Home
          </NavLink>
          <NavLink
            to="/travel-guide/africa"
            activeClassName="is-active"
            className="f6 f5-l link bg-animate white-80 hover-bg-red  dib pa3 ph4-l ttu"
          >
            Africa
          </NavLink>
          <NavLink
            to="/travel-guide/americas"
            activeClassName="is-active"
            className="f6 f5-l link bg-animate white-80 hover-bg-red  dib pa3 ph4-l ttu"
          >
            Americas
          </NavLink>
          <NavLink
            to="/travel-guide/asia"
            activeClassName="is-active"
            className="f6 f5-l link bg-animate white-80 hover-bg-red  dib pa3 ph4-l ttu"
          >
            Asia
          </NavLink>
          <NavLink
            to="/travel-guide/europe"
            activeClassName="is-active"
            className="f6 f5-l link bg-animate white-80 hover-bg-red  dib pa3 ph4-l ttu"
          >
            Europe
          </NavLink>
          <NavLink
            to="/travel-guide/oceania"
            activeClassName="is-active"
            className="f6 f5-l link bg-animate white-80 hover-bg-red  dib pa3 ph4-l ttu"
          >
            Oceania
          </NavLink>
          <NavLink
            to="/travel-guide/polar"
            activeClassName="is-active"
            className="f6 f5-l link bg-animate white-80 hover-bg-red  dib pa3 ph4-l ttu"
          >
            Polar
          </NavLink>
          <NavLink
            to="/travel-guide/map"
            activeClassName="is-active"
            className="f6 f5-l link bg-animate white-80 hover-bg-red  dib pa3 ph4-l ttu"
          >
            Map
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default header;
