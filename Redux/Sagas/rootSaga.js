import { all } from 'redux-saga/effects';
import { sayHello, mySaga, fetchResponse, OtpSaga, fetchOtp } from './sagas';

export default function* rootSaga() {
  yield all([sayHello(), mySaga(), fetchResponse(), OtpSaga(), fetchOtp()]);
}
