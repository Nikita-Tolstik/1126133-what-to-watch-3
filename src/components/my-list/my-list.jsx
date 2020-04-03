import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {FilmsList} from '../films-list/films-list.jsx';
import UserBlock from '../user-block/user-block.jsx';
import Logo from '../logo/logo.jsx';
import {getFavoriteFilms} from '../../reducer/data/selector.js';

const MyList = ({favoriteFilms, onCardFilmClick}) => {

  return (
    <div className="user-page">
      <header className="page-header user-page__head">

        <Logo
          isHeader={true}
        />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList
          films={favoriteFilms}
          onCardFilmClick={onCardFilmClick}
        />
      </section>

      <footer className="page-footer">

        <Logo
          isHeader={false}
        />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

MyList.propTypes = {

  onCardFilmClick: PropTypes.func.isRequired,

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
};

const mapStateToProps = (state) => ({
  favoriteFilms: getFavoriteFilms(state),
});

export {MyList};
export default connect(mapStateToProps)(MyList);
