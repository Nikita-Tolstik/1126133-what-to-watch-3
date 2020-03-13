import React, {PureComponent} from 'react';
import {NO_MOVIE} from '../../const.js';


const withSelectFilm = (Component) => {
  class WithSelectFilm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        film: NO_MOVIE,
      };

      this._handleCardFilmClick = this._handleCardFilmClick.bind(this);
    }

    _handleCardFilmClick(filmData) {
      this.setState({
        film: filmData,
      });
    }

    render() {

      return (
        <Component

          {...this.props}
          selectFilm={this.state.film}
          onCardFilmClick={this._handleCardFilmClick}
        />
      );
    }
  }

  return WithSelectFilm;
};

export default withSelectFilm;
