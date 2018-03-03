import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import globe from '../Globe.svg';

export default class Header extends Component {
    render () {
      return (
        <header className="bg-purple white-80 tc pv4 avenir">
          <h1 className="mt2 mb3 baskerville i fw1 f1">Travel Guide</h1>
          <img src={globe} className="App-logo" alt="logo" />

 
          <nav className="bt bb tc mw8 center mt4">
            <NavLink to='/' activeClassName="is-active" className="f6 f5-l link bg-animate white-80 hover-bg-light-purple dib pa3 ph4-l">Home</NavLink>
            <NavLink to='/africa' activeClassName="is-active" className="f6 f5-l link bg-animate white-80 hover-bg-light-purple dib pa3 ph4-l">Africa</NavLink>
            <NavLink to='/americas' activeClassName="is-active" className="f6 f5-l link bg-animate white-80 hover-bg-light-purple dib pa3 ph4-l">Americas</NavLink>
            <NavLink to='/asia' activeClassName="is-active" className="f6 f5-l link bg-animate white-80 hover-bg-light-purple dib pa3 ph4-l">Asia</NavLink>
            <NavLink to='/europe' activeClassName="is-active" className="f6 f5-l link bg-animate white-80 hover-bg-light-purple dib pa3 ph4-l">Europe</NavLink>
            <NavLink to='/oceania' activeClassName="is-active" className="f6 f5-l link bg-animate white-80 hover-bg-light-purple dib pa3 ph4-l">Oceania</NavLink>
            <NavLink to='/polar' activeClassName="is-active" className="f6 f5-l link bg-animate white-80 hover-bg-light-purple dib pa3 ph4-l">Polar</NavLink>
          </nav>
        </header>
      )
    }
}


