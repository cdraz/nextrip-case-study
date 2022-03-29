const busReducer = ( state = { route: '', direction: '', stops: [] }, action ) => {
    switch (action.type) {
        // For selecting a route, state will be reset to just route, as prior route direction and stop need to be reset
        case 'SET_SELECTED_ROUTE':
            return { route: action.payload, direction: '', stops: [] };
        // When direction is selected, keep prior route, clear out any stops
        case 'SET_SELECTED_DIRECTION':
            return {
                route: state.route,
                direction: action.payload
            }
        default:
            return state;
    }
};

export default busReducer;