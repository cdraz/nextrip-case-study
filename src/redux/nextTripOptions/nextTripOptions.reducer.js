const nextTripOptionsReducer = ( state = {}, action ) => {
    switch (action.type) {
        case 'SET_ROUTE_OPTIONS':
            return {
                routes: action.payload
            };
        default:
            return state;
    }
};

export default nextTripOptionsReducer;