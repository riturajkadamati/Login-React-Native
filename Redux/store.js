import { createStore, applyMiddleware } from 'redux';
import RootReducer from './Reducers/RootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
