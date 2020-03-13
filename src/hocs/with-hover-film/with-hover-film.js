import React, {PureComponent} from 'react';
import {NO_MOVIE} from '../../const.js';

const withHoverFilm = (Component) => {

  class WithHoverFilm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = ({
        film: NO_MOVIE,
      });

      this._handleMouseFilmEnter = this._handleMouseFilmEnter.bind(this);
      this._handleMouseFilmLeave = this._handleMouseFilmLeave.bind(this);
    }

    _handleMouseFilmEnter(filmData) {
      this.setState({
        film: filmData,
      });
    }

    _handleMouseFilmLeave() {
      this.setState({
        film: NO_MOVIE,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onMouseFilmEnter={this._handleMouseFilmEnter}
          onMouseFilmLeave={this._handleMouseFilmLeave}
        />
      );
    }
  }

  return WithHoverFilm;
};

export default withHoverFilm;
