import {FAIL, PROFILE_GET, START, SUCCESS} from '../../utils/const';


const initialState = {
  data: null,
  errorMsg: '',
  isLoading: false
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case PROFILE_GET + START:
      return {
        ...state,
        isLoading: true,
        errorMsg: '',
      }

    case PROFILE_GET + SUCCESS:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };

    case PROFILE_GET + FAIL:
      return {
        ...state,
        errorMsg: action.payload.errorMsg,
      };

    default:
      return state;
  }
}
