import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/app.jsx';
import {reducer} from './reducer.js';
import withSelectFilm from './hocs/with-select-film/with-select-film.js';

const AppWrapped = withSelectFilm(App);

const Settings = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);


ReactDOM.render(
    <Provider store={store}>
      <AppWrapped
        title={Settings.TITLE}
        genre={Settings.GENRE}
        year={Settings.YEAR}
      />
    </Provider>,
    document.querySelector(`#root`)
);
