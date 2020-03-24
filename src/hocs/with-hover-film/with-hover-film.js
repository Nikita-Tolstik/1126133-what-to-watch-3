import React, {PureComponent} from 'react';

const NO_MOVIES = -1;

const withHoverFilm = (Component) => {

  class WithHoverFilm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = ({
        film: NO_MOVIES,
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
        film: NO_MOVIES,
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
