import {LOG_IN} from "../../utils/const";

export function logIn(params) {
  const {login, password} = params;
  return {
    type: LOG_IN,
    payload: {login, password}
  }
}
