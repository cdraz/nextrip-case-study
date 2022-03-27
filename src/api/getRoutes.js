import axios from 'axios';

// Get Routes from NextTrip API
const getRoutes = async () => {
    try {
        return await axios.get('https://svc.metrotransit.org/NexTrip/Routes?format=json');
    }
    catch (error) {
        return error;
    }
};

export default getRoutes;