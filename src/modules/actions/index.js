import {
  FAIL,
  LOG_IN,
  LOG_OUT, NEWS_GET, PROFILE_GET,
  START,
  SUCCESS
} from '../../utils/const';
import {checkResponse} from '../helpers/session';
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
              id: res.data.id
            }
          });
          cb();
          localStorage.setItem('isAuth', 'yes');
          /*TODO: delete this*/
          localStorage.setItem('email', params.email);
          localStorage.setItem('password', '12345');
        } else {
          dispatch({
            type: LOG_IN + FAIL,
            payload: {
              errorMsg: res.message || defaultErrorMsg,
            },
            error: true,
          })
        }
      })
      .catch(res => dispatch({
        type: LOG_IN + FAIL,
        payload: {
          errorMsg: res.message || defaultErrorMsg,
        },
        error: true,
      }));
  };
}

export function logOut() {
    return ({
      type: LOG_OUT,
    });
}

export function getNews() {
  return (dispatch) => {
    dispatch({
      type: NEWS_GET + START
    });

    return httpGet(`news`)
      .then(res => {
        if (checkResponse(res)) {
          dispatch({
            type: NEWS_GET + SUCCESS,
            payload: res.data
          });
        } else {
          dispatch({
            type: NEWS_GET + FAIL,
            payload: {
              errorMsg: res.message || defaultErrorMsg
            }
          });
        }
      })
      .catch(error => {
        dispatch({
          type: NEWS_GET + FAIL,
          payload: {
            errorMsg: error.message || defaultErrorMsg
          }
        });
      });
  }
}

export function getProfile(id) {
  return dispatch => {
    dispatch({
      type: PROFILE_GET + START
    });

    return httpGet(`user-info/${id}`)
      .then(res => {
        if (checkResponse(res)) {
          dispatch({
            type: PROFILE_GET + SUCCESS,
            payload: res.data
          })
        } else {
          dispatch({
            type: NEWS_GET + FAIL,
            payload: {
              errorMsg: res.message || defaultErrorMsg
            }
          });
        }
      })
      .catch(error => {
        dispatch({
          type: NEWS_GET + FAIL,
          payload: {
            errorMsg: error.message || defaultErrorMsg
          }
        });
      })
  }
}


