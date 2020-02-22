import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

const SmallMovieCard = ({film, onCardFilmClick, onMouseFilmEnter, onMouseFilmLeave, isPlaying}) => {

  return (

    <article
      onMouseEnter={onMouseFilmEnter}
      onMouseLeave={onMouseFilmLeave}
      className="small-movie-card catalog__movies-card">

      <div onClick={() => {
        onCardFilmClick(film);
      }}
      className="small-movie-card__image">

        <VideoPlayer

          isPlaying={isPlaying}
          img={film.img}
          videoPreview={film.videoPreview}
        />
      </div>

      <h3 className="small-movie-card__title">

        <a onClick={(evt) => {
          evt.preventDefault();
          onCardFilmClick(film);
        }}
        className="small-movie-card__link" href="movie-page.html">

          {film.title}
        </a>
      </h3>
    </article>
  );
};


SmallMovieCard.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onCardFilmClick: PropTypes.func.isRequired,
  onMouseFilmEnter: PropTypes.func.isRequired,
  onMouseFilmLeave: PropTypes.func.isRequired,
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
    videoPreview: PropTypes.string.isRequired,
  }).isRequired,
};

export default SmallMovieCard;
