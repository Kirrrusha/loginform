import {applyMiddleware, compose, createStore} from 'redux';
import logger from '../modules/middlewares/logger';
import reducer from '../modules/reducer';
import thunk from 'redux-thunk';
import api from '../modules/middlewares/api';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, api, logger)
);

const store = createStore(
  reducer,
  enhancer);

export default store;
