import { nextTripOptionsSaga, fetchRoutes, fetchDirections } from './nextTripOptions.saga';
import * as getRoutesModule from '../../api/getRoutes';
import { takeLatest } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';

describe('nextTripOptionsSaga', () => {

    // Set up our saga generator function for testing
    const generator = nextTripOptionsSaga();

    // Check our generator values at each step, make sure that the action and callback are paired correctly
    // This only works if they are in correct order, when adding new sagas place at end
    test('Saga should wait for "FETCH_ROUTES" requests and call fetchRoutes when received', () => {
        expect(generator.next().value).toEqual(
            takeLatest('FETCH_ROUTES', fetchRoutes));
        });
    test('Saga should wait for "FETCH_DIRECTIONS" requests and call fetchDirections when received', () => {
        expect(generator.next().value).toEqual(
            takeLatest('FETCH_DIRECTIONS', fetchDirections));
        });
    });


// TODO: Test each called function from saga, mock functions and ensure they are only called once each time the generator
//       function is triggered

// describe('fetchRoutes', () => {
//     // TODO TEST: When fetchRoutes is called, should call getRoutes once and dispatch the return value
//     test('Should call getRoutes to make API request', async () => {
//         jest.spyOn(getRoutesModule, 'getRoutes').mockImplementation(() => Promise.resolve('TEST'));
//         let result;
//         const sagaResult = await runSaga({
//             dispatch: (action => result = action)
//         }, getRoutes);

//         expect(getRoutes).toHaveBeenCalledTimes(1);
//         expect(result).toEqual({ type: 'SET_ROUTE_OPTIONS', payload: 'TEST' });
//     })
// })