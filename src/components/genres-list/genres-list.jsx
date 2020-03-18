import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getGenre} from '../../reducer/app/selector.js';

const TAG_REF = `A`;

const GenresList = ({activeGenre, genres, onGenreClick}) => {

  const genresMarkup = (
    <ul
      onClick={(evt) => {
        evt.preventDefault();

        if (evt.target.tagName !== TAG_REF || evt.target.textContent === activeGenre) {
          return;
        }

        const filterName = evt.target.textContent;
        onGenreClick(filterName);
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
};


const mapStateToProps = (state) => ({
  activeGenre: getGenre(state),
});

export {GenresList};
export default connect(mapStateToProps)(GenresList);
