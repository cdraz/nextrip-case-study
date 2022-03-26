// Redux and Redux-Saga imports for store setup
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Import reducer and saga
import busReducer from './bus.reducer';
import busSaga from './bus.saga';

// Create saga middleware
const middleware = createSagaMiddleware();
const middlewareList = [middleware];

// Create redux store
const store = createStore(
    busReducer,
    applyMiddleware(...middlewareList)
);

// Let Redux-Saga know which saga to use
middleware.run(busSaga);

export default store;