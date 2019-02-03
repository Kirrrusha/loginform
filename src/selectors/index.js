import {createSelector} from 'reselect';
import {NAME} from '../utils/const';


const newsSelector = state => state[NAME].data;
const newsIsLoading = state => state[NAME].isLoading;
const newsErrorMsg = state => state[NAME].errorMsg;

export const getAll = createSelector(
  newsSelector,
  newsIsLoading,
  newsErrorMsg,
  (data, isLoading, errorMsg) => ({
    data,
    isLoading,
    errorMsg,
  })
);
