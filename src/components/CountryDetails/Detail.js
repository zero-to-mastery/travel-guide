import React from "react";
import "../../styles/Region.css";
import Loader from "../utils/Loader";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";

class Detail extends React.Component {
  state = {
    details: null
  };

  componentDidMount = () => {
    const { id } = this.props.match.params;
    axios.get(`https://restcountries.eu/rest/v2/name/${id}`).then(response => {
      if (id.toLowerCase() === "india") {
        this.setState({ details: response.data[1] });
      } else {
        this.setState({ details: response.data[0] });
      }
    });
  };

  renderDetail = () => {
    const { details } = this.state;

    if (!details) {
      return <Loader />;
    }
    return (
      <div className="region-details">
      <article className=" center bg-white mv3 ba b--black-10">
      <div class="tc">
      <img src={details.flag} height="300" width="500"
      className=" dib" title="Photo of a kitty staring at you"></img>
      <h1 class="f1">{this.props.match.params.id}</h1>
      <hr class="mw3 bb bw1 b--black-10"></hr>
      <article class="cf">
  <div class="fl w-50  tc">
  <dl class="lh-title pa4 mt0">
  <dt class="f2 b">Population</dt>
  <dd class="ml0 f3">{details.population.toLocaleString()}</dd>
  <dt class="f2 b mt2">Capital</dt>
  <dd class="ml0 f3">{details.capital}</dd>
  <dt class="f2 b mt2">Call Code</dt>
  <dd class="ml0 f3">{details.callingCodes}</dd>
  <dt class="f2 b mt2">Region</dt>
  <dd class="ml0 f3 ">{details.region}</dd>
</dl>
  </div>
  <div class="fl w-50  tc">
    <dl class="lh-title pa4 mt0">
  <dt class="f2 b">Native</dt>
  <dd class="ml0 f3">{details.demonym}</dd>
  <dt class="f2 b mt2">Currencies</dt>
  <dd class="ml0 f3">{details.currencies.map(currency => `${currency.name} (${currency.code})`).join(', ')}</dd>
  <dt class="f2 b mt2">Time Zone(s)</dt>
  <dd class="ml0 f3">{details.timezones.join(', ')}</dd>
  <dt class="f2 b mt2"> 
  <Link
          className=" underline f2 link dim br-pill ph4 pv3 dib  "
          to={`/travel-guide/${details.region.toLowerCase()}`}
        >
          BACK
        </Link>

  </dt>
</dl>
  </div>
</article>

      </div>
      </article>
      </div>
    );
  };

  render() {
    return (
      <div className="centerflex">
        <div className="tc bg-white-90 detailCard code dib br3 pb1 mt3 mb3 bw2 shadow-5 region">
          {this.renderDetail()}
        </div>
      </div>
    );
  }
}

export default withRouter(Detail);
