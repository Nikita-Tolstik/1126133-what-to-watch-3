import React, {PureComponent} from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import PropTypes from 'prop-types';


class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderAppScreen() {
    const {title, genre, year, films} = this.props;

    return (
      <Main
        title={title}
        genre={genre}
        year={year}
        films={films}
        onTitleClick={(evt) => {
          evt.preventDefault();
        }}
      />
    );
  }

  render() {

    return (
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            {this._renderAppScreen()}
          </Route>

          <Route exact path="/movie">
            <MoviePage

              film={this.props.films[1]}
              films={this.props.films}
            />
          </Route>

        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    quantityRatings: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired,
  })).isRequired,
};

export default App;
