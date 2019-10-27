import React from 'react';
import {shallow, configure} from 'enzyme';
import PlaceCard from "./place-card";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const clickHandler = jest.fn();
it(`simulate click to the title of card`, () => {
  const card = shallow(<PlaceCard
    id={`567657`}
    title={``}
    imgURL={``}
    isPremium={false}
    isFavorite={false}
    price={0}
    type={``}
    rating={0}
    onTitleClickHandler={clickHandler}
  />);
  card.find(`.place-card__name a`).simulate(`click`);
  expect(clickHandler).toHaveBeenCalled();
});