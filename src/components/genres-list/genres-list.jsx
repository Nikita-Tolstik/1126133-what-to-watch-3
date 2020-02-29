import React from 'react';
import PropTypes from 'prop-types';

const TAG_REF = `A`;

const GenresList = ({activeGenre, genresList, onGenreClick}) => {

  const genresMarkup = (

    <ul
      onClick={(evt) => {
        evt.preventDefault();
        if (evt.target.tagName !== TAG_REF || evt.target.textContent === activeGenre) {
          return;
        }
        onGenreClick(evt.target.textContent);
      }}
      className="catalog__genres-list"
    >

      {genresList.map((it) => (

        <li key={it} className={`catalog__genres-item ${it === activeGenre ? `catalog__genres-item--active` : ``}`}>
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
  genresList: PropTypes.array.isRequired,
};

export default GenresList;

