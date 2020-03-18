import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';
import withActivePlayer from '../../hocs/with-active-player/with-active-player.js';
import withHoverFilm from '../../hocs/with-hover-film/with-hover-film.js';
import {getFilteredFilms} from '../../reducer/data/selector.js';

const SmallMovieCardWrapped = withActivePlayer(withHoverFilm(SmallMovieCard));

class FilmsList extends PureComponent {

  render() {
    const {films, onCardFilmClick} = this.props;

    return (
      <div className="catalog__movies-list">

        {films.map((it, i) => {

          const movieCard = (
            <SmallMovieCardWrapped

              id={i}
              key={`${it.title}${it.img}`}
              film={it}
              onCardFilmClick={onCardFilmClick}
            />
          );

          return movieCard;
        })}
      </div>
    );
  }
}

FilmsList.propTypes = {
  onCardFilmClick: PropTypes.func.isRequired,
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
    videoPreview: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  films: getFilteredFilms(state),
});

export {FilmsList};
export default connect(mapStateToProps)(FilmsList);
