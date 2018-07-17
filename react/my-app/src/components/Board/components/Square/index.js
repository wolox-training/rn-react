import React from 'react';
import PropTypes from 'prop-types';

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick} type="button">
      {value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func
};

export default Square;
