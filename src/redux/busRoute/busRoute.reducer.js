const busReducer = ( state = { route: '', direction: '', stop: '' }, action ) => {
    switch (action.type) {
        // For selecting a route, state will be reset to just route, as prior route direction and stop need to be reset
        case 'SET_SELECTED_ROUTE':
            return { route: action.payload, direction: '', stop: '' };
        // When direction is selected, keep prior route, clear out the stop
        case 'SET_SELECTED_DIRECTION':
            return {
                route: state.route,
                direction: action.payload,
                stop: ''
            }
        // When stop is selected, keep prior state and change stop
        case 'SET_SELECTED_STOP':
            return {
                ...state,
                stop: action.payload
            }
        default:
            return state;
    }
};

export default busReducer;