import { combineReducers } from 'redux';
import reducer from './Reducer';

const rootReducer = combineReducers({
  root: reducer
});

export default rootReducer;