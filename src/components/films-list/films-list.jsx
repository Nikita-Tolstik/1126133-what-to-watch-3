import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';
import withActivePlayer from '../../hocs/with-active-player/with-active-player.js';
import {getFilteredFilms} from '../../reducer/data/selector.js';

const SmallMovieCardWrapped = withActivePlayer(SmallMovieCard);

const FilmsList = ({films, onCardFilmClick}) => {
  return (
    <div className="catalog__movies-list">
      {films.map((it, i) => {
        const movieCard = (
          <SmallMovieCardWrapped
            id={i}
            key={it.id}
            film={it}
            onCardFilmClick={onCardFilmClick}
          />
        );
        return movieCard;
      })}
    </div>
  );
};


FilmsList.propTypes = {
  onCardFilmClick: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
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
  films: getFilteredFilms(state),
});

export {FilmsList};
export default connect(mapStateToProps)(FilmsList);
