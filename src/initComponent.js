import React, {Component} from 'react';
import App from "./components/App/app.jsx";
import offers from "./mocks/offers.js";

class InitComponent extends Component {
  render() {
    const clickHandler = () => {};
    return <App offers={offers} clickHandler={clickHandler} />;
  }
}

App.defaultProps = {
  offers: []
};

export default InitComponent;
