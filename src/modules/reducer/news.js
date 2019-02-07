import {FAIL, LOG_OUT, NEWS_GET, START, SUCCESS} from '../../utils/const';

export const initialState = {
  data: null,
  isLoading: false,
  errorMsg: null
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case NEWS_GET + START:
      return {
        ...state,
        isLoading: true,
        errorMsg: null
      };

    case NEWS_GET + SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload
      };

    case NEWS_GET + FAIL:
      return {
        ...state,
        errorMsg: payload.errorMsg
      };

    case LOG_OUT:
      return {
        ...state,
        isLoading: false,
        data: null,
        errorMsg: '',
      };

    default:
      return state;
  }
}
