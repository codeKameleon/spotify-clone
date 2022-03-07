import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer }  from './reducers/rootReducer';
import { watcherSaga } from './sagas/rootSaga';

const sagaMiddleware =  createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

// run watcher saga to listen to any redux action
sagaMiddleware.run(watcherSaga)

export default store;