import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  API_SUCCESS,
  API_RESPONSE,
  API_FAILURE,
  OPT_VERIFY
} from '../Actions/actionTypes';
import { apicall } from '../API';

export function* sayHello() {
  console.log('Hello world');
}

export function* fetchResponse(action) {
  try {
    console.log(action);
    console.log('actionpayload', action.payload);

    const APIResponse = yield call(apicall.verifyMobilenumber, action.payload);

    console.log('response=>', JSON.stringify(APIResponse));
    yield put({ type: API_SUCCESS, APIResponse });
  } catch (error) {
    yield put({ type: API_FAILURE, payload: error });
  }
}

export function* fetchOtp(action) {
  try {
    console.log(action);
    console.log('actionpayload', action.mobileno, action.otp);

    const APIResponse = yield call(
      apicall.verifyOTPnumber,
      action.mobileno,
      action.otp
    );
    console.log('response=>', JSON.stringify(APIResponse));
    yield put({ type: API_SUCCESS, APIResponse });
  } catch (error) {
    yield put({ type: API_FAILURE, payload: error });
  }
}
export function* OtpSaga() {
  yield takeLatest(OPT_VERIFY, fetchOtp);
}

export function* mySaga() {
  yield takeLatest(API_RESPONSE, fetchResponse);
}
