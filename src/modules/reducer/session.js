import {LOG_IN, LOG_IN_FAILURE, LOG_OUT, START, SUCCESS} from '../../utils/const';


const initialState = {
  user: null,
  errorMsg: '',
  loading: null
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case LOG_IN + START:
      return {
        ...state,
        loading: true,
        errorMsg: '',
      }

    case LOG_IN + SUCCESS:
      return {
        ...state,
        user: {
          email: payload.email,
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
