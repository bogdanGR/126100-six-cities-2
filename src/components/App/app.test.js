import React from 'react';
import renderer from 'react-test-renderer';
import App from "./app.jsx";
import offers from "./../../mocks/offers.js";

it(`main page renders correctly`, () => {
  const card = renderer
    .create(<App offers={offers}/>)
    .toJSON();
  expect(card).toMatchSnapshot();
});
