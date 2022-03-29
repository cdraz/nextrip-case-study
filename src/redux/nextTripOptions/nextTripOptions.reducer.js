const nextTripOptionsReducer = ( state = {}, action ) => {
    switch (action.type) {
        case 'SET_ROUTE_OPTIONS':
            return {
                routes: action.payload
            };
        case 'SET_DIRECTION_OPTIONS':
            return {
                ...state,
                directions: action.payload
            }
        case 'SET_STOP_OPTIONS':
            return {
                ...state,
                stops: action.payload
            }
        default:
            return state;
    }
};

export default nextTripOptionsReducer;