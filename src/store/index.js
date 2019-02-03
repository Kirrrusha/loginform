import {applyMiddleware, createStore} from 'redux';
import logger from '../modules/middlewares/logger';
import reducer from '../modules/reducer';
import thunk from 'redux-thunk';
import api from '../modules/middlewares/api';


const store = createStore(
  reducer,
  applyMiddleware(thunk, api, logger));

export default store;
