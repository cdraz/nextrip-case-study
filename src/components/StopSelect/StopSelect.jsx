import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

// MUI Imports
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import LinearProgress from '@mui/material/LinearProgress';

function StopSelect() {

    // Store access
    const stops = useSelector(store => store.nextTripOptions.stops);
    const selectedBus = useSelector(store => store.busRoute);

    // Dispatch hook
    const dispatch = useDispatch();

    // On App load, get stop options from NextTrip API
    useEffect(() => {
        dispatch({ type: 'FETCH_STOPS', payload: { route: selectedBus.route, direction: selectedBus.direction } });
    }, [selectedBus]);

    // Handle change in stop select, on change dispatch to redux and set selected stop
    const handleChange = event => {
        dispatch({
            type: 'SET_SELECTED_STOP',
            payload: event.target.value
        });
    }

    // If no stops (redux state still awaiting stops from API), show loading bar
    if (!stops) {
        return (
            <LinearProgress />
        )
    }

    return (
        <TextField
            select
            label="Select a Stop"
            value={selectedBus.stop}
            onChange={handleChange}
        >
            {stops.map(stop => (
                <MenuItem key={stop.Value} value={stop.Value}>
                    {stop.Text}
                </MenuItem>
            ))}
        </TextField>
    )

}
export default StopSelect;