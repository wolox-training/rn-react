import React from 'react';
import PropTypes from 'prop-types';

function Board({ x, o }) {
  return (
    <div id="match-details-curtain">
      <div id="match-details-container">
        <div id="teams-container">
          <div className="x-team flexbox-items">
            <div className="x-team logo" />
          </div>
          <div id="score-container">
            <div className="x-team score">{x}</div>
            <div className="o-team score">{o}</div>
          </div>
          <div className="flexbox-items">
            <div className="o-team flexbox-items">
              <div className="o-team logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Board.propTypes = {
  x: PropTypes.number,
  o: PropTypes.number
};

export default Board;
