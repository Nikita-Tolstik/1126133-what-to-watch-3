import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getGenre} from '../../reducer/logic/selector.js';
import {ActionCreator} from '../../reducer/logic/logic.js';

const TAG_REF = `A`;

const GenresList = ({activeGenre, genres, onGenreClick, onCountShownFilmsReset}) => {

  const genresMarkup = (
    <ul
      onClick={(evt) => {
        evt.preventDefault();

        if (evt.target.tagName !== TAG_REF || evt.target.textContent === activeGenre) {
          return;
        }

        const filterName = evt.target.textContent;

        onGenreClick(filterName);
        onCountShownFilmsReset();
      }}
      className="catalog__genres-list"
    >

      {genres.map((it) => (

        <li key={it} className={`catalog__genres-item ${it === activeGenre && `catalog__genres-item--active`}`}>
          <a href="#" className="catalog__genres-link">{it}</a>
        </li>
      ))}
    </ul>
  );

  return genresMarkup;
};


GenresList.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  genres: PropTypes.array.isRequired,

  onCountShownFilmsReset: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  activeGenre: getGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCountShownFilmsReset(prevCountFilms) {
    dispatch(ActionCreator.resetCount(prevCountFilms));
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
