import nextTripOptionsReducer from './nextTripOptions.reducer';

describe('nextTripOptionsReducer', () => {

    test('Should return initial state with undefined action', () => {
        expect(nextTripOptionsReducer(undefined, {})).toEqual({});
    });

    test('Should handle SET_ROUTE_OPTIONS and return previous state plus route options from API', () => {
        const setRouteOptionsAction = {
            type: 'SET_ROUTE_OPTIONS',
            payload: [ 'Test 1', 'Test 2', 'Test 3' ]
        }
        expect(nextTripOptionsReducer({}, setRouteOptionsAction)).toEqual({ routes: [ 'Test 1', 'Test 2', 'Test 3' ]});
    });

    test('Should handle SET_DIRECTION_OPTIONS and return previous state plus direction options from API', () => {
        const setDirectionOptionsAction = {
            type: 'SET_DIRECTION_OPTIONS',
            payload: [ 'Test 1', 'Test 2', 'Test 3' ]
        }
        expect(nextTripOptionsReducer({}, setDirectionOptionsAction)).toEqual({ directions: [ 'Test 1', 'Test 2', 'Test 3' ]});
    });

    test('Should handle SET_STOP_OPTIONS and return previous state plus stop options from API', () => {
        const setStopOptionsAction = {
            type: 'SET_STOP_OPTIONS',
            payload: [ 'Test 1', 'Test 2', 'Test 3' ]
        }
        expect(nextTripOptionsReducer({}, setStopOptionsAction)).toEqual({ stops: [ 'Test 1', 'Test 2', 'Test 3' ]});
    });

})