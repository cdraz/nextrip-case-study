import { combineReducers } from 'redux';

// Import reducers
import busRoute from './busRoute/busRoute.reducer';
import nextTripOptions from './nextTripOptions/nextTripOptions.reducer';

// Combine reducers
const rootReducer = combineReducers({
    busRoute, // Contains details of the currently selected bus route by user
    nextTripOptions, // Contains all bus routes, directions, and stops received by NextTrip API
});

export default rootReducer;