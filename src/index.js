import React from 'react';
import ReactDOM from 'react-dom';
import InitComponent from "./initComponent";

const initApp = () => {
  ReactDOM.render(
      <InitComponent/>,
      document.getElementById(`root`)
  );
};

initApp();
