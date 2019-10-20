import React from 'react';
import renderer from 'react-test-renderer';
import App from "./app.jsx";
import CARDS_MOCK from "../../mock-data";

it(`main page renders correctly`, () => {
  const card = renderer
    .create(<App cards={CARDS_MOCK}/>)
    .toJSON();
  expect(card).toMatchSnapshot();
});
