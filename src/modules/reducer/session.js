import {LOG_IN} from "../../utils/const";


const initialState = {
  user: null,
  errorMsg: '',
}

export default (state = initialState, action) => {
  const {type, payload} = action;
  console.log(payload);
  switch (type) {
    case LOG_IN:
      return {
        ...state,
        user: {
          name: payload.login,
        },
        errorMsg: '',
      }
    default:
      return state
  }
}
