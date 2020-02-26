import React from 'react';
import PropTypes from 'prop-types';
import {getGenresList} from '../../reducer.js';

const TAG_REF = `A`;

const GenresList = ({activeGenre, onGenreClick}) => {
  const genres = getGenresList();

  return (

    <ul
      onClick={(evt) => {
        evt.preventDefault();
        if (evt.target.tagName !== TAG_REF || evt.target.textContent === activeGenre) {
          return;
        }
        onGenreClick(evt.target.textContent);
      }}
      className="catalog__genres-list">

      {genres.map((it) => (

        <li key={it} className={`catalog__genres-item ${it === activeGenre ? `catalog__genres-item--active` : ``}`}>
          <a href="#" className="catalog__genres-link">{it}</a>
        </li>
      ))}
    </ul>
  );
};


GenresList.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

export default GenresList;
