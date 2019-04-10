import React from 'react';
import '../../styles/Region.css';
import { withRouter } from 'react-router-dom'
import axios from 'axios';


class Detail extends React.Component {
    
    state = {
        details: null
    }

   componentDidMount = () => {
        const { id } = this.props.match.params;
        axios.get(`https://restcountries.eu/rest/v2/name/${id}`)
            .then(response => {
                this.setState({ details: response.data[0] })
            })
   }

   renderDetail = () => {
     const { details } = this.state;

     if( !details ) {
         return <div>Loading.....</div>
     } 
     return (
         <div>
             <img alt={details.region} src={details.flag} height="100" width="200"/>
             <h1>{this.props.match.params.id}</h1>
             <h3>Population: {details.population}</h3>
             <h3><strong>Capital</strong>: {details.capital}</h3>
             <h3><strong>Call Code</strong>: {details.callingCodes}</h3>
             <h3><strong>Region</strong>: {details.region}</h3>
             <h3><strong>Native</strong>: {details.demonym}</h3>
             <h3><strong>TimeZone</strong>: {details.timezones}</h3>
         </div>
     )
   }

    render(){
    return (
        <div className="centerflex">
            <div className="tc bg-white-90  code dib br3 pb1 ma3 bw2 shadow-5 region" >
            {this.renderDetail()}
            </div>
        </div>
    );
   }
};

export default withRouter(Detail);