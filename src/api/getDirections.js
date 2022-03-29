import axios from 'axios';

// Get Routes from NextTrip API
const getDirections = async (route) => {
    try {
        return await axios.get(`https://svc.metrotransit.org/NexTrip/Directions/${route}?format=json`);
    }
    catch (error) {
        return error;
    }
};

export default getDirections;