import {
  API_SUCCESS,
  API_RESPONSE,
  API_FAILURE,
  OPT_VERIFY
} from './actionTypes';

export const getResponse = mobileno => {
  return {
    type: API_RESPONSE,
    payload: mobileno
  };
};

export const ResponseSuccess = message => {
  return {
    type: API_SUCCESS,
    payload: message
  };
};

export const ResponseFailure = error => {
  return {
    type: API_FAILURE,
    payload: error
  };
};

export const OtpValidate = (mobileno, otp) => {
  return {
    type: OPT_VERIFY,
    mobileno,
    otp
  };
};
