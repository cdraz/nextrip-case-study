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
})