import { all } from 'redux-saga/effects';

// Import sagas to combine
import busRoute from './busRoute/busRoute.saga';
import nextTripOptions from './nextTripOptions/nextTripOptions.saga';

// Combine sagas into rootSaga and export
export default function* rootSaga() {
    yield all([
        busRoute(), // Handles side effects for currently selected bus route
        nextTripOptions(), // Handles side effects for receiving options from NextTrip API
    ]);
};