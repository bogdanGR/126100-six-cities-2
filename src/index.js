import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/app.jsx";

const initApp = () => {
  ReactDOM.render(
      <App/>,
      document.getElementById(`root`)
  );
};
initApp();
