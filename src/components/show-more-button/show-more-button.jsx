import React from 'react';
import PropTypes from 'prop-types';


const ShowMoreButton = ({isShowMoreButton, onShowMoreButtonClick}) => {
  let buttonMarkup = null;

  if (isShowMoreButton) {
    buttonMarkup = (
      <div className="catalog__more">
        <button
          onClick={onShowMoreButtonClick}
          className="catalog__button" type="button">Show more</button>
      </div>
    );
  }

  return buttonMarkup;
};

ShowMoreButton.propTypes = {
  isShowMoreButton: PropTypes.bool.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
};

export default ShowMoreButton;
