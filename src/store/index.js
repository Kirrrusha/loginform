import {applyMiddleware, createStore} from 'redux';
import logger from '../modules/middlewares/logger';
import reducer from '../modules/reducer';
import thunk from 'redux-thunk';


const store = createStore(
  reducer, applyMiddleware(thunk, logger));

export default store;
