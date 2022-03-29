import axios from 'axios';

// Get Stops from NextTrip API
const getStops = async (routeAndDirection) => {
    try {
        return await axios.get(`https://svc.metrotransit.org/NexTrip/Stops/${routeAndDirection.route}/${routeAndDirection.direction}?format=json`);
    }
    catch (error) {
        return error;
    }
};

export default getStops;