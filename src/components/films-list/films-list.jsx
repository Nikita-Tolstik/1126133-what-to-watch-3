import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';
import ShowMoreButton from '../show-more-button/show-more-button.jsx';
import withActivePlayer from '../../hocs/with-active-player/with-active-player.js';
import {getFilteredFilms} from '../../reducer/data/selector.js';
import {getCountShownFilms} from '../../reducer/logic/selector.js';
import {ActionCreator} from '../../reducer/logic/logic.js';

const SmallMovieCardWrapped = withActivePlayer(SmallMovieCard);

const FilmsList = ({films, countShownFilms, onCardFilmClick, onShowMoreButtonClick}) => {

  const shownFilms = films.slice(0, countShownFilms);
  const isShowMoreButton = films.length > countShownFilms;

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {shownFilms.map((it, i) => {
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

      <ShowMoreButton
        isShowMoreButton={isShowMoreButton}
        onShowMoreButtonClick={() => onShowMoreButtonClick(countShownFilms)}
      />
    </React.Fragment>
  );
};


FilmsList.propTypes = {

  countShownFilms: PropTypes.number.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,

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
  countShownFilms: getCountShownFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  onShowMoreButtonClick(prevCountFilms) {
    dispatch(ActionCreator.increaseCount(prevCountFilms));
  }
});

export {FilmsList};
export default connect(mapStateToProps, mapDispatchToProps)(FilmsList);
