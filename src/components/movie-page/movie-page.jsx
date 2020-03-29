import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import UserBlock from '../user-block/user-block.jsx';
import NavigationList, {TabType} from '../navigation-list/navigation-list.jsx';
import {FilmsList} from '../films-list/films-list.jsx';
import withActiveValue from '../../hocs/with-active-value/with-active-value.js';
import {getAuthorizationStatus} from '../../reducer/user/selectors.js';
import {AuthorizationStatus} from '../../reducer/user/user.js';
import {ActionCreator, ScreenType} from '../../reducer/screen-type/screen-type.js';
import {getSimilarFilms} from '../../utils/utils.js';
import {ActionCreator as DataActionCreator} from '../../reducer/data/data.js';
import {getFilms, getCurrentFilm} from '../../reducer/data/selector.js';
import {AppRoute} from '../../const.js';
// import history from '../../history.js';


const MoviePage = (props) => {
  const {
    id,
    currentFilm,
    initialFilms,
    authorizationStatus,
    onCardFilmClick,
    onScreenAddReviewSwitch,
    onSetCurrentId,
  } = props;

  const isFindFilm = initialFilms.find((it) => it.id === id);

  if (!isFindFilm) {
    onSetCurrentId(id);
    return null;
  }

  window.scrollTo({
    top: 0,
    behavior: `smooth`
  });

  const NavigationListWrapped = withActiveValue(NavigationList, TabType.OVERVIEW);
  const isNoAuth = authorizationStatus !== AuthorizationStatus.AUTH;
  const similarFilms = getSimilarFilms(initialFilms, currentFilm);
  const isSimilarFilms = similarFilms.length !== 0;

  let filmListMarkup = <h3 className="catalog__title">There are no similar movies.</h3>;

  if (isSimilarFilms) {
    filmListMarkup = (
      <FilmsList
        films={similarFilms}
        onCardFilmClick={onCardFilmClick}
      />
    );
  }

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full" style={{backgroundColor: currentFilm.backgroundColor}}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={currentFilm.backgroundImage} alt={currentFilm.title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <UserBlock />
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{currentFilm.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{currentFilm.genre}</span>
                <span className="movie-card__year">{currentFilm.released}</span>
              </p>

              <div className="movie-card__buttons">
                <Link
                  to={`${AppRoute.PLAYER}/${id}`}
                  className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref={`#play-s`}></use>
                  </svg>
                  <span>Play</span>
                </Link>

                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref={`#add`}></use>
                  </svg>
                  <span>My list</span>
                </button>

                <a
                  onClick={(evt) => {
                    evt.preventDefault();
                    onScreenAddReviewSwitch();
                  }}
                  href="add-review.html"
                  className={`btn movie-card__button ${isNoAuth && `visually-hidden`}`}>Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={currentFilm.posterImage} alt={currentFilm.title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">

              <NavigationListWrapped
                film={currentFilm}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          {filmListMarkup}
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
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
    </React.Fragment>
  );
};

MoviePage.propTypes = {
  id: PropTypes.number.isRequired,
  onSetCurrentId: PropTypes.func.isRequired,

  onScreenAddReviewSwitch: PropTypes.func.isRequired,


  onCardFilmClick: PropTypes.func.isRequired,

  authorizationStatus: PropTypes.oneOf([
    AuthorizationStatus.AUTH,
    AuthorizationStatus.NO_AUTH,
    AuthorizationStatus.PENDING,
  ]).isRequired,

  currentFilm: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      posterImage: PropTypes.string.isRequired,
      previewImage: PropTypes.string.isRequired,
      backgroundImage: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      scoresCount: PropTypes.number.isRequired,
      director: PropTypes.string.isRequired,
      stars: PropTypes.array.isRequired,
      runTime: PropTypes.number.isRequired,
      genre: PropTypes.string.isRequired,
      released: PropTypes.number.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      videoLink: PropTypes.string.isRequired,
      videoPreview: PropTypes.string.isRequired,
    }),
    PropTypes.number.isRequired
  ]).isRequired,

  initialFilms: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    stars: PropTypes.array.isRequired,
    runTime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    videoLink: PropTypes.string.isRequired,
    videoPreview: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  currentFilm: getCurrentFilm(state),
  initialFilms: getFilms(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSetCurrentId(id) {
    dispatch(DataActionCreator.setCurrentId(id));
  },


  onScreenAddReviewSwitch() {
    dispatch(ActionCreator.changeScreen(ScreenType.ADD_REVIEW));
  },
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
