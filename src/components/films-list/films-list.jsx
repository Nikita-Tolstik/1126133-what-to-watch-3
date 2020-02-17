import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = ({
      img: null,
      title: null,
    });

    this._handleMouseFilmEnter = this._handleMouseFilmEnter.bind(this);
    this._handleMouseFilmLeave = this._handleMouseFilmLeave.bind(this);
  }

  _handleMouseFilmEnter(film) {
    this.setState({
      img: film.img,
      title: film.title,
    });
  }

  _handleMouseFilmLeave() {
    this.setState({
      img: null,
      title: null,
    });
  }

  render() {
    const {onCardFilmClick} = this.props;

    return (
      <div className="catalog__movies-list">

        {this.props.films.map((it) => {

          const movieCard = (
            <SmallMovieCard

              key={`${it.title}${it.img}`}
              film={it}
              onCardFilmClick={onCardFilmClick}
              onMouseFilmEnter={this._handleMouseFilmEnter}
              onMouseFilmLeave={this._handleMouseFilmLeave}
            />);

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
  })).isRequired,
};

export default FilmsList;
