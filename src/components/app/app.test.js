import React from 'react';
import renderer from 'react-test-renderer';
import App from "./app.jsx";
import offers from "./../../mocks/offers.js";
import mapMock from "../../mocks/map";
const citiesCoordinates = offers.map((it) => it.coordinates);
it(`main page renders correctly`, () => {
  const card = renderer
    .create(<App offers={offers} cities={citiesCoordinates} leaflet={mapMock} />)
    .toJSON();
  expect(card).toMatchSnapshot();
});
