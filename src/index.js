import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import App from './components/app/app.jsx';
import reducer from './reducer/reducer.js';
import withSelectFilm from './hocs/with-select-film/with-select-film.js';
import {Operation as DataOperation} from './reducer/data/data.js';
import {Operation as UserOperation, ActionCreator, AuthorizationStatus} from './reducer/user/user.js';
import {ActionCreator as ActionCreatorScreen, ScreenType} from './reducer/screen-type/screen-type.js';
import {createAPI} from './api.js';

const AppWrapped = withSelectFilm(App);

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const onErrorStatus = (error) => {
  store.dispatch(ActionCreator.putStatus(error));
};

const onErrorScreenShow = (errorMessage) => {
  store.dispatch(ActionCreator.putStatus(errorMessage));
  store.dispatch(ActionCreatorScreen.changeScreen(ScreenType.ERROR));
};

const api = createAPI(onUnauthorized, onErrorStatus, onErrorScreenShow);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperation.loadFilms());
store.dispatch(DataOperation.loadPromoFilm());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <AppWrapped
      />
    </Provider>,
    document.querySelector(`#root`)
);
