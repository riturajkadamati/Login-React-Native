import {
  API_SUCCESS,
  API_RESPONSE,
  API_FAILURE,
  OPT_VERIFY
} from '../Actions/actionTypes';

const initialState = {
  error: '',
  phoneno: '',
  otp: null,
  message: null
};

const reducer = (state = initialState, action) => {
  console.log('action==>', action);
  switch (action.type) {
    case API_SUCCESS:
      return { ...state, message: action.payload };
    case API_FAILURE:
      return { ...state, error: action.payload, phoneno: '' };
    case API_RESPONSE:
      return { ...state, phoneno: action.payload };
    case OPT_VERIFY:
      return { ...state, otp: action.payload };
  }
  return state;
};

export default reducer;
