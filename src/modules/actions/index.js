import {
  LOG_IN,
  LOG_IN_FAILURE,
  LOG_OUT,
  NEWS_GET_FAILURE,
  NEWS_GET_REQUEST,
  NEWS_GET_SUCCESS,
  START,
  SUCCESS
} from '../../utils/const';
import {checkCredentials, checkResponse} from '../helpers/session';
import {httpGet, postData} from '../helpers/network';
import {API_ROOT, defaultErrorMsg} from '../../utils/default';

export function logIn(params, cb) {
  return (dispatch) => {
    dispatch({
      type: LOG_IN + START,
    });


    return postData(`${API_ROOT}/validate`, params)
      .then(res => {
        if (checkResponse(res)) {
          dispatch({
            type: LOG_IN + SUCCESS,
            payload: {
              email: params.email,
            }
          });
          cb();
          localStorage.setItem('isAuth', 'yes');
          /*TODO: delete this*/
          localStorage.setItem('email', params.email);
          localStorage.setItem('password', '12345');
        } else {
          dispatch({
            type: LOG_IN_FAILURE,
            payload: {
              errorMsg: res.message || defaultErrorMsg,
            },
            error: true,
          })
        }
      })
      .catch(res => dispatch({
        type: LOG_IN_FAILURE,
        payload: {
          errorMsg: res.message || defaultErrorMsg,
        },
        error: true,
      }));
  };
}

export function logOut() {
  return {
    type: LOG_OUT,
  };
}

export function getNews() {
  return (dispatch) => {
    dispatch({
      type: NEWS_GET_REQUEST
    });

    return httpGet(`news`)
      .then(res => {
        if (checkResponse(res)) {
          dispatch({
            type: NEWS_GET_SUCCESS,
            payload: res.data
          });
        } else {
          dispatch({
            type: NEWS_GET_FAILURE,
            payload: {
              errorMsg: res.message || defaultErrorMsg
            }
          });
        }
      })
      .catch(error => {
        dispatch(dispatch({
          type: NEWS_GET_FAILURE,
          payload: {
            errorMsg: error.message || defaultErrorMsg
          }
        }));
      });
  }
}


