import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import getRoutes from '../../api/getRoutes';
import getDirections from '../../api/getDirections';

// fetchRoutes sends request for all bus routes to NextTrip API, then sends them to nextTripOptions reducer
function* fetchRoutes() {
    try {
        console.log('in fetchRoutes');
        let response = yield getRoutes();
        // After response received, send response to reducer
        yield put({
            type: 'SET_ROUTE_OPTIONS',
            payload: response.data
        });
    }
    catch (error) {
        console.error('Error in fetchRoutes', error);
    }
}

// fetchDirections sends request for all available directions for selected route to NextTrip API, then sends them to reducer
function* fetchDirections(action) {
    try {
        console.log('in fetchDirections', action.payload);
        let response = yield getDirections(action.payload);
        // After response received, send response to reducer
        yield put({
            type: 'SET_DIRECTION_OPTIONS',
            payload: response.data
        });
    }
    catch (error) {
        console.error('Error in fetchDirections', error);
    }
}

function* nextTripOptionsSaga() {
    yield takeLatest('FETCH_ROUTES', fetchRoutes);
    yield takeLatest('FETCH_DIRECTIONS', fetchDirections);
};

export {
    nextTripOptionsSaga,
    fetchRoutes,
    fetchDirections
};