import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

// MUI Imports
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import LinearProgress from '@mui/material/LinearProgress';

function DirectionSelect() {

    // Store access
    const directions = useSelector(store => store.nextTripOptions.directions);

    // Dispatch hook
    const dispatch = useDispatch();

    // On component load, get direction options for selected route from NextTrip API
    useEffect(() => {
        dispatch({ type: 'FETCH_DIRECTIONS' });
    }, []);

    // If no directions (redux state still awaiting directions from API), show loading bar
    if (!directions) {
        return (
            <LinearProgress />
        )
    }

    return (
        <></>
    )
}

export default DirectionSelect;