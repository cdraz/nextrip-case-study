import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import getRoutes from '../../api/getRoutes';

// fetchRoutes sends request for all bus routes to NextTrip API, then sends them to nextTripOptions reducer
function* fetchRoutes() {
    try {
        console.log('in fetchRoutes');
        let response = yield getRoutes();
        // After response received, send response to reducer
        yield put({
            type: 'SET_ROUTE_OPTIONS',
            payload: response.data
        })
    }
    catch (error) {
        console.error('Error in fetchRoutes', error);
    }
}

function* nextTripOptionsSaga() {
    yield takeLatest('FETCH_ROUTES', fetchRoutes);
};

export default nextTripOptionsSaga;