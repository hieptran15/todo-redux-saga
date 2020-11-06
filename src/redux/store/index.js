
import rootReducer from "../Reducers/index";
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootsaga from "../Sagas";

const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
    rootReducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(rootsaga)
export default store;