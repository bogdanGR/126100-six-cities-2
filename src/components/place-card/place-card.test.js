import React from 'react';
import PlaceCard from "./place-card";
import renderer from 'react-test-renderer';

describe(`renders correctly`, () => {
  it(`in the default state`, () => {
    const card = renderer
      .create(<PlaceCard
        id={`dsdsd`}
        title={``}
        imgURL={``}
        isPremium={false}
        isFavorite={false}
        price={0}
        type={``}
        rating={0}
      />)
      .toJSON();
    expect(card).toMatchSnapshot();
  });

  it(`if the card is favorite`, () => {
    const cardIsFavorite = renderer
      .create(<PlaceCard
        id={`fcdx34`}
        title={``}
        imgURL={``}
        isPremium={false}
        isFavorite={true}
        price={0}
        type={``}
        rating={0}
      />)
      .toJSON();
    expect(cardIsFavorite).toMatchSnapshot();
  });

  it(`if the card is premium`, () => {
    const cardIsPremium = renderer
      .create(<PlaceCard
        id={`ds43d`}
        title={``}
        imgURL={``}
        isPremium={true}
        isFavorite={false}
        price={0}
        type={``}
        rating={0}
      />)
      .toJSON();
    expect(cardIsPremium).toMatchSnapshot();
  });
});

