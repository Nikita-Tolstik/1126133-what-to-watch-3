import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/app/app.jsx';
import reducer from './reducer/reducer.js';
import withSelectFilm from './hocs/with-select-film/with-select-film.js';
import {Operation as DataOperation} from './reducer/data/data.js';
import {createAPI} from './api.js';

const api = createAPI(() => {});
const AppWrapped = withSelectFilm(App);

const Settings = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014
};

const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
);

store.dispatch(DataOperation.loadFilms());

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
