import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

// MUI Imports
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import LinearProgress from '@mui/material/LinearProgress';

function DirectionSelect() {

    // Store access
    const directions = useSelector(store => store.nextTripOptions.directions);
    const selectedBus = useSelector(store => store.busRoute);

    // Dispatch hook
    const dispatch = useDispatch();

    // On component load and whenever selectedBus.route changes, get direction options for selected route from NextTrip API
    useEffect(() => {
        dispatch({ type: 'FETCH_DIRECTIONS', payload: selectedBus.route });
    }, [selectedBus]);

    // Handle change in direction select, on change dispatch to redux and set selected direction
    const handleChange = event => {
        dispatch({
            type: 'SET_SELECTED_DIRECTION',
            payload: event.target.value
        });
    }

    // If no directions (redux state still awaiting directions from API), show loading bar
    if (!directions) {
        return (
            <LinearProgress />
        )
    }

    return (
        <TextField
            select
            label="Select a Direction"
            value={selectedBus.direction}
            onChange={handleChange}
        >
            {directions.map(direction => (
                <MenuItem key={direction.Text} value={direction.Value}>
                    {direction.Text}
                </MenuItem>
            ))}
        </TextField>
    )
}

export default DirectionSelect;