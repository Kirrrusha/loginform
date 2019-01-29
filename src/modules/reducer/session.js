import {LOG_IN, LOG_IN_FAILURE, LOG_OUT} from '../../utils/const';


const initialState = {
  user: null,
  errorMsg: '',
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case LOG_IN:
      return {
        ...state,
        user: {
          name: payload.name,
        },
        errorMsg: '',
      };

    case LOG_OUT:
      return {
        ...state,
        user: null,
        errorMsg: '',
      };

    case LOG_IN_FAILURE:
      return {
        ...state,
        errorMsg: action.payload.errorMsg,
      };

    default:
      return state;
  }
}
