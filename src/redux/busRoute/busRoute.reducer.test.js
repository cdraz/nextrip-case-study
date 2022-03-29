import busRouteReducer from './busRoute.reducer.js';

describe('busRouteReducer', () => {
    test('Should return the initial state with undefined action', () => {
        expect(busRouteReducer(undefined, {})).toEqual({ route: '', direction: '', stop: '' });
    });

    test('Should handle SET_SELECTED_ROUTE requests and return previous state with new route from payload', () => {
        const setRouteAction = {
            type: 'SET_SELECTED_ROUTE',
            payload: 'Test Route'
        }
        expect(busRouteReducer({}, setRouteAction)).toEqual({ route: 'Test Route', direction: '', stop: '' });
    });

    test('Should handle SET_SELECTED_DIRECTION requests and return selected route and selected direction with no selected stops', () => {
        const setDirectionAction = {
            type: 'SET_SELECTED_DIRECTION',
            payload: 'Test Direction'
        }
        expect(busRouteReducer({ route: 'Test Route', direction: '', stop: '' }, setDirectionAction)).toEqual({ route: 'Test Route', direction: 'Test Direction', stop: ''});
    });

    test('Should handle SET_SELECTED_STOP requests and return selected route and selected direction with new selected stop', () => {
        const setStopAction = {
            type: 'SET_SELECTED_STOP',
            payload: 'Test Stop'
        }
        expect(busRouteReducer({ route: 'Test Route', direction: 'Test Direction', stop: '' }, setStopAction)).toEqual({ route: 'Test Route', direction: 'Test Direction', stop: 'Test Stop' });
    });
});