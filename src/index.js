import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/app.jsx";
const TITLES = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`, `Wood and stone place`];
const initApp = () => {
  ReactDOM.render(
      <App
        titles={TITLES}
      />,
      document.getElementById(`root`)
  );
};
initApp();
