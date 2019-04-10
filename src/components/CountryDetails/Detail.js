import React from 'react';
import '../../styles/Region.css';
import { withRouter } from 'react-router-dom'


class Detail extends React.Component {
    
    state = {
        details: null
    }
   componentDidMount = () => {
        
   }

    render(){
    return (
        <div className="centerflex">
            <div className="tc bg-white-90  code dib br3 pb1 ma3 bw2 shadow-5 region" >
            <div>{this.props.match.params.id}</div>
            </div>
        </div>
    );
   }
};

export default withRouter(Detail);