import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from "../place-card/place-card.jsx";


class OffersList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
    this.onSelected = this.onSelected.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  onSelected(id) {
    this.setState({selected: id});
  }

  handleMouseOver(offer) {
    this.setState({selected: offer});
  }

  render() {
    const offers = this.props.offers;
    return <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        return <PlaceCard
          key={offer.id}
          {...offer}
          onSelected={this.onSelected}
          selected={this.state.selected === offer.id}
          onHover={this.handleMouseOver}
        />;
      })}
    </div>;
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  })).isRequired,
};

export default OffersList;
