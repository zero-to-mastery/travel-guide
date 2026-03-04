import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/Header.css";

const navLinks = [
  { to: "/travel-guide", label: "Home" },
  { to: "/travel-guide/africa", label: "Africa" },
  { to: "/travel-guide/americas", label: "Americas" },
  { to: "/travel-guide/asia", label: "Asia" },
  { to: "/travel-guide/europe", label: "Europe" },
  { to: "/travel-guide/oceania", label: "Oceania" },
  { to: "/travel-guide/polar", label: "Polar" },
  { to: "/travel-guide/map", label: "Map" },
]

const Header = () => {
  return (
    <header className="white-80 tc pv4 header">
      <h1
        className="mt2 mb3 headertext"
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
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `f6 f5-l link bg-animate white-80 hover-bg-red b dib pa3 ph4-l${isActive ? " is-active" : ""}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;