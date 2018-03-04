import React, { Component } from 'react';
import globe from '../Globe.svg';


export default class Header extends Component {
    render () {
      return (<header className="bg-purple white-80 tc pv4 avenir">
        
  
 <h1 className="mt2 mb3 baskerville i fw1 f1">Travel Guide</h1>
 <img src={globe} className="App-logo" alt="logo" />

 
 <nav className="bt bb tc mw8 center mt4">
   <a className="f6 f5-l link bg-animate white-80 hover-bg-light-purple dib pa3 ph4-l" href="#">Africa</a>
   <a className="f6 f5-l link bg-animate white-80 hover-bg-light-purple dib pa3 ph4-l" href="#">Americas</a>
   <a className="f6 f5-l link bg-animate white-80 hover-bg-light-purple dib pa3 ph4-l" href="#">Asia</a>
   <a className="f6 f5-l link bg-animate white-80 hover-bg-light-purple dib pa3 ph4-l" href="#">Oceana</a>
   <a className="f6 f5-l link bg-animate white-80 hover-bg-light-purple dib pa3 ph4-l" href="#">Polar</a>
 
 </nav>
</header>)
    }
}


