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

    this._handleMouseEnterFilm = this._handleMouseEnterFilm.bind(this);
    this._handleMouseLeaveFilm = this._handleMouseLeaveFilm.bind(this);
  }

  _handleMouseEnterFilm(film) {
    this.setState({
      img: film.img,
      title: film.title,
    });
  }

  _handleMouseLeaveFilm() {
    this.setState({
      img: null,
      title: null,
    });
  }

  render() {
    const {onTitleClick} = this.props;

    return (
      <div className="catalog__movies-list">

        {this.props.films.map((it) => (
          <SmallMovieCard

            key={`${it.title}${it.img}`}
            film={it}
            onTitleClick={onTitleClick}
            onMouseEnterFilm={this._handleMouseEnterFilm}
            onMouseLeaveFilm={this._handleMouseLeaveFilm}
          />
        ))}

      </div>
    );
  }
}

FilmsList.propTypes = {
  onTitleClick: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default FilmsList;
