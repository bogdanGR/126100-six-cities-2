import React from 'react';
import PlaceCard from './place-card.jsx';
import renderer from 'react-test-renderer';

describe(`renders correctly`, ()=> {
  it(`in the default state`, () => {
    const card = renderer
      .create(<PlaceCard/>)
      .toJSON();
    expect(card).toMatchSnapshot();
  });

  it(`if the card is favorite`, ()=> {
    const cardIsFavorite = renderer
      .create(<PlaceCard isFavorite={true} />)
      .toJSON();
    expect(cardIsFavorite).toMatchSnapshot();
  });

  it(`if the card is premium`, ()=> {
    const cardIsPremium = renderer
      .create(<PlaceCard isPremium={true} />)
      .toJSON();
    expect(cardIsPremium).toMatchSnapshot();
  });
});
