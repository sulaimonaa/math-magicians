import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const Quotes = ({ quote }) => (
  <div>
    {quote.map((quotes) => (
      <div className="quote" key={uuidv4()}>
        <h3>{quotes.quote}</h3>
        <p>
          - &nbsp;
          {quotes.author}
        </p>
      </div>
    ))}
  </div>
);

Quotes.propTypes = {
  quote: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Quotes;
