import React from "react";
import { NavLink, Link } from "react-router-dom";
// import globe from "../Globe.svg";
import "../styles/Header.css";

const header = () => {
  return (
    <header className="white-80 tc pv4 header pb7 ">
      <h1
        className="mt2 mb3  headertext"
        data-aos="fade-down"
        data-aos-duration="5000"
      >
        <Link to="/travel-guide">Travel Guide</Link>
      </h1>
      <div data-aos="fade-up" data-aos-duration="7000">
        <Link to="/travel-guide">
          <div data-aos="fade-up" data-aos-duration="7000">
            <iframe
              src="https://giphy.com/embed/yo1whaKkz38ME"
              width="150"
              height="100"
              className="giphy-embed"
              allowFullScreen
              title="A GIF of planet earth spinning"
            ></iframe>
          </div>
        </Link>
      </div>

      <nav className="bt bb tc center mt4 nav">
        <NavLink
          to="/travel-guide"
          activeClassName="is-active"
          className="f6 f5-l link bg-animate white-80 hover-bg-red b dib pa3 ph4-l"
        >
          Home
        </NavLink>
        <NavLink
          to="/travel-guide/africa"
          activeClassName="is-active"
          className="f6 f5-l link bg-animate white-80 hover-bg-red b dib pa3 ph4-l"
        >
          Africa
        </NavLink>
        <NavLink
          to="/travel-guide/americas"
          activeClassName="is-active"
          className="f6 f5-l link bg-animate white-80 hover-bg-red b dib pa3 ph4-l"
        >
          Americas
        </NavLink>
        <NavLink
          to="/travel-guide/asia"
          activeClassName="is-active"
          className="f6 f5-l link bg-animate white-80 hover-bg-red b dib pa3 ph4-l"
        >
          Asia
        </NavLink>
        <NavLink
          to="/travel-guide/europe"
          activeClassName="is-active"
          className="f6 f5-l link bg-animate white-80 hover-bg-red b dib pa3 ph4-l"
        >
          Europe
        </NavLink>
        <NavLink
          to="/travel-guide/oceania"
          activeClassName="is-active"
          className="f6 f5-l link bg-animate white-80 hover-bg-red b dib pa3 ph4-l"
        >
          Oceania
        </NavLink>
        <NavLink
          to="/travel-guide/polar"
          activeClassName="is-active"
          className="f6 f5-l link bg-animate white-80 hover-bg-red b dib pa3 ph4-l"
        >
          Polar
        </NavLink>
        <NavLink
          to="/travel-guide/map"
          activeClassName="is-active"
          className="f6 f5-l link bg-animate white-80 hover-bg-red b dib pa3 ph4-l"
        >
          Map
        </NavLink>
      </nav>
    </header>
  );
};

export default header;
