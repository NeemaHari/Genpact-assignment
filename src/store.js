import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import indexReducer from './reducer';
import indexSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const Store = createStore(indexReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(indexSaga);

export default Store;
