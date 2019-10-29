import React, {Component} from 'react';
import App from "./components/App/app.jsx";
import offers from "./mocks/offers.js";

class InitComponent extends Component {
  render() {
    return <App offers={offers} />;
  }
}

App.defaultProps = {
  offers: []
};

export default InitComponent;
