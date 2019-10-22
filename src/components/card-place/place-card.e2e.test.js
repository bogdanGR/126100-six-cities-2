import React from 'react';
import {shallow, configure} from 'enzyme';
import PlaceCard from './place-card.jsx';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const clickHandler = jest.fn();
it(`simulate click to the title of card`, () => {
  const card = shallow(<PlaceCard onTitleClickHandler={clickHandler}/>);
  card.find(`.place-card__name a`).simulate(`click`);
  expect(clickHandler).toHaveBeenCalled();
});
