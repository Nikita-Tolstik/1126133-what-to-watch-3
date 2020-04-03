import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.js';
import history from '../../history.js';
import {ActionCreator} from '../../reducer/logic/logic.js';

const ALL_GENRES = `All genres`;

const Logo = ({isHeader, onGenreReset}) => {

  return (
    <div className="logo">
      <Link
        to={AppRoute.ROOT}
        onClick={(evt) => {
          if (history.location.pathname === AppRoute.ROOT) {
            evt.preventDefault();
          }
          onGenreReset(ALL_GENRES);
        }}
        href="main.html" className={`logo__link ${isHeader ? `` : `logo__link--light`}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};

Logo.propTypes = {
  isHeader: PropTypes.bool.isRequired,
  onGenreReset: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onGenreReset(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
});

export {Logo};
export default connect(null, mapDispatchToProps)(Logo);
