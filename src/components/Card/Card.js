import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ cardData, membersToggle }) => {
  return (
    <article className="Card">
      <p className="title">{cardData[0].name}</p>
    </article>
  );
};

export default Card;