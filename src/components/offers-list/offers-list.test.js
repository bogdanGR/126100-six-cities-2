import renderer from 'react-test-renderer';
import React from 'react';
import OffersList from "./offers-list.jsx";

it(`Offers list correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<OffersList
      offers={[]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
