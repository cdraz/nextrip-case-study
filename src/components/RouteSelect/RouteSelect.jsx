import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

// MUI Imports
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import LinearProgress from '@mui/material/LinearProgress';

function RouteSelect() {

    // Dispatch hook
    const dispatch = useDispatch();

    // On App load, get route options from NextTrip API
    useEffect(() => {
        dispatch({ type: 'FETCH_ROUTES' });
    }, []);

    // Redux store access
    const routes = useSelector(store => store.nextTripOptions.routes);
    const selectedBus = useSelector(store => store.busRoute);
    
    // Handle change in route select, on change dispatch to redux and set selected route
    const handleChange = event => {
        dispatch({
            type: 'SET_SELECTED_ROUTE',
            payload: event.target.value
        });
    }

    // If routes isn't set in redux state yet (still awaiting API response), show loading bar
    if (!routes) {
        return (
            <LinearProgress />
        )
    }

    return (
            <TextField
                select
                label="Select route"
                value={selectedBus.route}
                onChange={handleChange}
            >
                {routes.map(route => (
                    <MenuItem key={route.Route} value={route.Route}>
                        {route.Description}
                    </MenuItem>
                ))}
            </TextField>
    )
}

export default RouteSelect;