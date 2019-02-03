import {NEWS_GET_FAILURE, NEWS_GET_REQUEST, NEWS_GET_SUCCESS} from '../../utils/const';

export const initialState = {
  data: null,
  isLoading: false,
  errorMsg: null
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case NEWS_GET_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMsg: null
      };

    case NEWS_GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload
      };

    case NEWS_GET_FAILURE:
      return {
        ...state,
        errorMsg: payload.errorMsg
      };

    default:
      return state;
  }
}
