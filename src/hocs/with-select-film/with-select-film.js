import React, {PureComponent} from 'react';

const NO_MOVIES = -1;

const withSelectFilm = (Component) => {
  class WithSelectFilm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        film: NO_MOVIES,
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
