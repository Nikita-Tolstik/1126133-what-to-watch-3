import React from 'react';
import PropTypes from 'prop-types';

const SmallMovieCard = ({film, onTitleClick, onMouseEnterFilm, onMouseLeaveFilm}) => {

  return (

    <article
      onMouseEnter={() => onMouseEnterFilm(film)}
      onMouseLeave={onMouseLeaveFilm}
      className="small-movie-card catalog__movies-card">

      <div className="small-movie-card__image">
        <img src={film.img} alt={film.title} width="280" height="175" />
      </div>

      <h3 className="small-movie-card__title">

        <a onClick={onTitleClick}
          className="small-movie-card__link" href="movie-page.html">
          {film.title}
        </a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onMouseEnterFilm: PropTypes.func.isRequired,
  onMouseLeaveFilm: PropTypes.func.isRequired,
};

export default SmallMovieCard;
