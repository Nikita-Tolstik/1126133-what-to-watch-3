import React from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';
import {getRating} from '../../utils/utils.js';

const getDescriptionMarkup = (texts) => {

  const markupElements = texts.map((it) => {

    const element = <p key={it}>{it}</p>;

    return element;
  });

  return markupElements;
};

const MoviePage = ({film, films}) => {

  const ratingLavel = getRating(film.rating);

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={film.img} alt={film.img} />
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

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.year}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref={`#play-s`}></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref={`#add`}></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={film.img} alt={film.img} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item movie-nav__item--active">
                    <a href="#" className="movie-nav__link">Overview</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Details</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="movie-rating">
                <div className="movie-rating__score">{film.rating}</div>
                <p className="movie-rating__meta">
                  <span className="movie-rating__level">{ratingLavel}</span>
                  <span className="movie-rating__count">{film.quantityRatings} ratings</span>
                </p>
              </div>

              <div className="movie-card__text">
                {getDescriptionMarkup(film.description)}

                <p className="movie-card__director"><strong>Director: {film.director}</strong></p>

                <p className="movie-card__starring"><strong>Starring: {film.starring}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__movies-list">
            {films.slice(0, 4).map((it) => {

              const movieCard = (
                <SmallMovieCard

                  key={`${it.title}${it.img}`}
                  film={it}
                  onCardFilmClick={(evt) => {
                    evt.preventDefault();
                  }}
                  onMouseFilmEnter={() => {}}
                  onMouseFilmLeave={() => {}}
                />);

              return movieCard;
            })}
          </div>
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
  film: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    description: PropTypes.array.isRequired,
    rating: PropTypes.number.isRequired,
    quantityRatings: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired,
  }).isRequired,

  films: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    description: PropTypes.array.isRequired,
    rating: PropTypes.number.isRequired,
    quantityRatings: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired,
  })).isRequired,
};


export default MoviePage;
