import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import App from './components/app/app.jsx';
import reducer from './reducer/reducer.js';
import {Operation as DataOperation, ActionCreator as DataActionCreator} from './reducer/data/data.js';
import {Operation as UserOperation, ActionCreator as UserActionCreator, AuthorizationStatus} from './reducer/user/user.js';
import {createAPI} from './api.js';

const onServerErrorSet = () => {
  store.dispatch(DataActionCreator.setError());
};

const onUnauthorized = () => {
  store.dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const onErrorStatus = (error) => {
  store.dispatch(UserActionCreator.putStatus(error));
};

const api = createAPI(onUnauthorized, onErrorStatus, onServerErrorSet);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);


store.dispatch(UserOperation.checkAuth());
store.dispatch(DataOperation.loadFilms());
store.dispatch(DataOperation.loadPromoFilm());


ReactDOM.render(
    <Provider store={store}>
      <App
      />
    </Provider>,
    document.querySelector(`#root`)
);
