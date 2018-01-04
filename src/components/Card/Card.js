import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';
import { cardBuilder } from '../helper';

export const Card = ({ cardData }) => {
  return (
    <article className="Card">
      <p className="title">{cardData.name}</p>
      <p className="title">{cardData.founded}</p>
      <p className="title">{cardData.seats}</p>
      <p className="title">{cardData.titles}</p>
      <p className="title">{cardData.coatOfArms}</p>
      <p className="title">{cardData.ancestralWeapons}</p>
      <p className="title">{cardData.words}</p>
    </article>
  );
};

Card.propTypes = {
  cardData: PropTypes.object,
};

export default Card;