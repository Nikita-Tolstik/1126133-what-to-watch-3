import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import history from '../../history.js';
import {getIsError} from '../../reducer/data/selector.js';

const ErrorMessage = ({isError}) => {

  if (!isError) {
    return null;
  }

  return (
    <div className="error">
      <p className="error__message">Internal Server Error. Please, refresh page.</p>
      <button
        onClick={() => history.go()}
        className="error__button" href="#">
        Refresh page
      </button>
    </div>
  );
};

ErrorMessage.propTypes = {
  isError: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isError: getIsError(state),
});

export {ErrorMessage};
export default connect(mapStateToProps)(ErrorMessage);
