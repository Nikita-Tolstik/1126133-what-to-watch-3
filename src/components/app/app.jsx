import React, {PureComponent} from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from 'react-redux';
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import PropTypes from 'prop-types';


class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      film: null,
    };

    this._handleCardFilmClick = this._handleCardFilmClick.bind(this);
  }

  _handleCardFilmClick(filmData) {
    this.setState({
      film: filmData,
    });
  }

  _renderAppScreen() {
    const {title, genre, year, films} = this.props;

    if (this.state.film === null) {

      return (
        <Main
          title={title}
          genre={genre}
          year={year}
          films={films}
          onCardFilmClick={this._handleCardFilmClick}
        />
      );
    }

    if (this.state.film !== null) {

      return (
        <MoviePage

          film={this.state.film}
          films={this.props.films}
        />);
    }

    return null;
  }


  render() {

    return (
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            {this._renderAppScreen()}
          </Route>

          {/* <Route exact path="/movie">
            <MoviePage

              film={this.props.films[0]}
              films={this.props.films}
            />
          </Route> */}

        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape({
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
  films: state.filteredFilms,
});

export {App};
export default connect(mapStateToProps)(App);
