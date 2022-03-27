import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

// MUI Imports
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LinearProgress from '@mui/material/LinearProgress';

function RouteSelect({ routes }) {

    // Dispatch hook
    const dispatch = useDispatch();

    // Redux store access for selected busRoute
    const selectedBus = useSelector(store => store.busRoute);

    // Handle change in route select, on change dispatch to redux and set selected route
    const handleChange = event => {
        console.log(event.target.value);
        dispatch({
            type: 'SET_SELECTED_ROUTE',
            payload: event.target.value
        });
    }

    return (
        <>
            {
                Array.isArray(routes) ?
                    <>
                        <InputLabel id="routes-label">Select a Route</InputLabel>
                        <Select
                            labelId="routes-label"
                            value={selectedBus.route}
                            onChange={handleChange}
                        >
                            {routes.map(route => (
                                <MenuItem key={route.Route} value={route.Route}>
                                    {route.Description}
                                </MenuItem>
                            ))
                            }
                        </Select>
                    </>
                    : <LinearProgress />
            }
        </>
    )
}

export default RouteSelect;