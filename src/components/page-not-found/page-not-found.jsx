import React from 'react';
import PropTypes from 'prop-types';
import history from '../../history.js';
import {AppRoute} from '../../const.js';

const PageNotFound = ({errorMessage}) => {

  return (
    <div className="user-page">

      <h1 className="page-title user-page__title" style={{position: `absolute`, top: `130px`, fontSize: `40px`}}>Error</h1>

      <header className="page-header movie-card__head">

        <div className="logo" style={{position: `absolute`, top: `22px`, left: `100px`}}>
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

      </header>

      <div className="sign-in user-page__content">
        <div className="sign-in__message" style={{lineHeight: `70px`}}>
          <p>{errorMessage}</p>
        </div>

        <div className="sign-in__submit">
          <button
            onClick={() => history.push(AppRoute.ROOT)}
            className="sign-in__btn">
            Go to main page
          </button>
        </div>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

PageNotFound.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

export default PageNotFound;

// { /* <br />Please, reload the application. */ }
