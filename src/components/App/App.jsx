import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import React Components
import RouteSelect from '../RouteSelect/RouteSelect';
import DirectionSelect from '../DirectionSelect/DirectionSelect';
import StopSelect from '../StopSelect/StopSelect';

// MUI Imports
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {

  // MUI Theme
  const theme = createTheme({
    palette: {
      primary: {
        main: '#116466',
      },
    },
  });

  // Store access
  const selectedBus = useSelector(store => store.busRoute);

  return (
    <ThemeProvider theme={theme}>
      <header style={{
        textAlign: 'center',
        paddingTop: '8%',
        paddingBottom: '5%',
        backgroundColor: '#116466',
        color: '#fff'
      }}>
        <Typography variant="h3">
          NexTrip Case Study
        </Typography>
      </header>
      <Grid container justify="center" alignItems="center" sx={{ marginTop: '5%' }}>
        <Grid item xs={10} sm={8} md={4} sx={{ margin: 'auto' }}>
          <Paper variant="outlined" sx={{ padding: '15%' }}>
            <Stack spacing={4}>
              <RouteSelect />
              {/* Only display DirectionSelect if there is a selected route */}
              {selectedBus.route && <DirectionSelect />}
              {/* Only display StopSelect if there is a selected direction and route */}
              {selectedBus.direction && <StopSelect />}
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
