import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import App from './components/app/app.jsx';
import reducer from './reducer/reducer.js';
import withActiveValue from './hocs/with-active-value/with-active-value.js';
import {Operation as DataOperation} from './reducer/data/data.js';
import {Operation as UserOperation, ActionCreator, AuthorizationStatus} from './reducer/user/user.js';
import {createAPI} from './api.js';

const AppWrapped = withActiveValue(App);

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const onErrorStatus = (error) => {
  store.dispatch(ActionCreator.putStatus(error));
};

const api = createAPI(onUnauthorized, onErrorStatus);

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
