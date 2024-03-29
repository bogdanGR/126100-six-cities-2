import React from 'react';
import Map from './map.jsx';
import renderer from 'react-test-renderer';
import mapMock from "../../mocks/map";

const cities = [[52.3909553943508, 4.85309666406198]];


it(`map render is correctly`, () => {
  const map = renderer
    .create(<Map cities={cities} leaflet={mapMock}/>)
    .toJSON();
  expect(map).toMatchSnapshot();
});
