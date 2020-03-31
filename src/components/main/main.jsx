import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import PromoMovie from '../promo-movie/promo-movie.jsx';
import FilmsList from '../films-list/films-list.jsx';
import GenresList from '../genres-list/genres-list.jsx';
import {ActionCreator} from '../../reducer/logic/logic.js';
import {getGenres} from '../../utils/utils.js';
import {getFilms} from '../../reducer/data/selector.js';


const Main = ({initialFilms, onCardFilmClick, onGenreClick}) => {
  const genres = getGenres(initialFilms);


  return (

    <React.Fragment>

      <PromoMovie
        onCardFilmClick={onCardFilmClick}
      />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList
            genres={genres}
            onGenreClick={onGenreClick}
          />

          <FilmsList
            onCardFilmClick={onCardFilmClick}
          />

        </section>

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
    </React.Fragment>
  );
};


Main.propTypes = {

  onCardFilmClick: PropTypes.func.isRequired,
  onGenreClick: PropTypes.func.isRequired,

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
  initialFilms: getFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);

