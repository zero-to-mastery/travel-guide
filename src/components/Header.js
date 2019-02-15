import React from 'react';
import { NavLink } from 'react-router-dom';
import globe from '../Globe.svg';
import '../styles/Header.css';

const header = () => {
  return (
    <header className="white-80 tc pv4 header pb7 ">

      <h1 className="mt2 mb3  headertext" data-aos="fade-down" data-aos-duration="5000"><a href="/">Travel Guide</a></h1>
      <div data-aos="fade-up" data-aos-duration="7000"><a href="/"><img src={globe} className="App-logo" alt="logo" /></a></div>

      <nav className="bt bb tc center mt4 nav">
        <NavLink to='/' activeClassName="is-active" className="f6 f5-l link bg-animate white-80 hover-bg-purple b dib pa3 ph4-l">Home</NavLink>
        <NavLink to='/africa' activeClassName="is-active" className="f6 f5-l link bg-animate white-80 hover-bg-purple b dib pa3 ph4-l">Africa</NavLink>
        <NavLink to='/americas' activeClassName="is-active" className="f6 f5-l link bg-animate white-80 hover-bg-purple b dib pa3 ph4-l">Americas</NavLink>
        <NavLink to='/asia' activeClassName="is-active" className="f6 f5-l link bg-animate white-80 hover-bg-purple b dib pa3 ph4-l">Asia</NavLink>
        <NavLink to='/europe' activeClassName="is-active" className="f6 f5-l link bg-animate white-80 hover-bg-purple b dib pa3 ph4-l">Europe</NavLink>
        <NavLink to='/oceania' activeClassName="is-active" className="f6 f5-l link bg-animate white-80 hover-bg-purple b dib pa3 ph4-l">Oceania</NavLink>
        <NavLink to='/polar' activeClassName="is-active" className="f6 f5-l link bg-animate white-80 hover-bg-purple b dib pa3 ph4-l">Polar</NavLink>
      </nav>
    </header>
  )
}

export default header;


