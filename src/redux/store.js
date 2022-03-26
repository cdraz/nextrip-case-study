// Redux and Redux-Saga imports for store setup
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

// Import reducer and saga
import rootReducer from './root.reducer';
import rootSaga from './root.saga';

// Create saga middleware
const middleware = createSagaMiddleware();
const middlewareList = [middleware, logger];

// Create redux store
const store = createStore(
    rootReducer,
    applyMiddleware(...middlewareList)
);

// Let Redux-Saga know which saga to use
middleware.run(rootSaga);

export default store;