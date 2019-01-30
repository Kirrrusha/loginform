import {LOG_IN, LOG_IN_FAILURE, LOG_OUT} from '../../utils/const';
import {checkCredentials} from '../helpers/session';

export function logIn(params, cb) {
  console.log(params);
  return dispatch => {
    if (checkCredentials(params)) {
      dispatch({
        type: LOG_IN,
        payload: {
          name: params.username,
        }
      });
      cb();
    } else {
      dispatch({
        type: LOG_IN_FAILURE,
        payload: {
          errorMsg: 'Имя пользователя или пароль введены не верно',
        },
        error: true, // https://github.com/redux-utilities/flux-standard-action
      });
    }
  };
}

export function logOut() {
  return {
    type: LOG_OUT,
  }
}

