import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/app.jsx";
import CARDS_MOCK from "./mocks/offers.js";
const initApp = () => {
  ReactDOM.render(
      <App
        cards={CARDS_MOCK}
      />,
      document.getElementById(`root`)
  );
};
initApp();
