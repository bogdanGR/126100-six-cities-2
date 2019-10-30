import React, {Component} from 'react';
import App from "./components/app/app.jsx";
import offers from "./mocks/offers.js";
import leaflet from 'leaflet';

const citiesCoordinates = offers.map((it) => it.coordinates);
class InitComponent extends Component {
  render() {
    return <App offers={offers} cities={citiesCoordinates} leaflet={leaflet}/>;
  }
}

App.defaultProps = {
  offers: []
};

export default InitComponent;
