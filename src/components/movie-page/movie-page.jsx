import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import UserBlock from '../user-block/user-block.jsx';
import NavigationList, {TabType} from '../navigation-list/navigation-list.jsx';
import {FilmsList} from '../films-list/films-list.jsx';
import Logo from '../logo/logo.jsx';
import withActiveValue from '../../hocs/with-active-value/with-active-value.js';
import {getAuthorizationStatus} from '../../reducer/user/selectors.js';
import {AuthorizationStatus} from '../../reducer/user/user.js';
import {getFilms, getCurrentFilm} from '../../reducer/data/selector.js';
import {getSimilarFilms} from '../../utils/utils.js';
import {AppRoute} from '../../const.js';
import {debounce} from 'debounce';
import {getFavoriteFilms} from '../../reducer/data/selector.js';
import {Operation as DataOperation} from '../../reducer/data/data.js';

const NO_CURRENT_FILM = -1;
const TIMER = 200;

const StatusFavorite = {
  ADD: 1,
  DELETE: 0,
};

const MoviePage = (props) => {
  const {
    currentFilm,
    initialFilms,
    authorizationStatus,
    onCardFilmClick,
    favoriteFilms,
    onFavoriteStatusUpdate,
    children,
  } = props;

  if (currentFilm === NO_CURRENT_FILM) {
    return null;
  }

  const NavigationListWrapped = withActiveValue(NavigationList, TabType.OVERVIEW);
  const isAuth = authorizationStatus === AuthorizationStatus.AUTH;
  const similarFilms = getSimilarFilms(initialFilms, currentFilm);
  const isSimilarFilms = similarFilms.length !== 0;
  const isFavorite = favoriteFilms.find((film) => film.id === currentFilm.id);
  const status = isFavorite ? StatusFavorite.DELETE : StatusFavorite.ADD;

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
            <Logo
              isHeader={true}
            />

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
                  to={`${AppRoute.PLAYER}/${currentFilm.id}`}
                  className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref={`#play-s`}></use>
                  </svg>
                  <span>Play</span>
                </Link>

                <button
                  onClick={debounce(() => onFavoriteStatusUpdate(currentFilm.id, status), TIMER)}
                  className="btn btn--list movie-card__button" type="button">
                  <svg
                    viewBox={isFavorite ? `0 0 18 14` : `0 0 19 20`}
                    width={isFavorite ? `18` : `19`}
                    height={isFavorite ? `14` : `20`}>
                    <use xlinkHref={isFavorite ? `#in-list` : `#add`}></use>
                  </svg>
                  <span>My list</span>
                </button>

                <Link
                  to={`${AppRoute.FILMS}/${currentFilm.id}${AppRoute.REVIEW}`}
                  href="add-review.html"
                  className={`btn movie-card__button ${isAuth ? `` : `visually-hidden`}`}>
                    Add review
                </Link>
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

          <Logo
            isHeader={false}
          />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>

        {children}
      </div>
    </React.Fragment>
  );
};

MoviePage.propTypes = {
  onCardFilmClick: PropTypes.func.isRequired,
  onFavoriteStatusUpdate: PropTypes.func.isRequired,

  authorizationStatus: PropTypes.oneOf([
    AuthorizationStatus.AUTH,
    AuthorizationStatus.NO_AUTH,
    AuthorizationStatus.PENDING,
    AuthorizationStatus.INITIAL,
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

  favoriteFilms: PropTypes.arrayOf(PropTypes.shape({
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

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const mapStateToProps = (state) => ({
  currentFilm: getCurrentFilm(state),
  initialFilms: getFilms(state),
  favoriteFilms: getFavoriteFilms(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteStatusUpdate(id, status) {
    dispatch(DataOperation.updateStatusFilm(id, status));
  }
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
