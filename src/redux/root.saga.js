import { all } from 'redux-saga/effects';

// Import sagas to combine
import { nextTripOptionsSaga } from './nextTripOptions/nextTripOptions.saga';

// Combine sagas into rootSaga and export
export default function* rootSaga() {
    yield all([
        nextTripOptionsSaga(), // Handles side effects for receiving options from NextTrip API
    ]);
};