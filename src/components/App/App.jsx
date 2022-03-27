import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import React Components
import RouteSelect from '../RouteSelect/RouteSelect';

function App() {

  // Redux store access
  const routes = useSelector(store => store.nextTripOptions.routes);

  // Dispatch hook
  const dispatch = useDispatch();

  // On App load, get route options from NextTrip API
  useEffect(() => {
    dispatch({ type: 'FETCH_ROUTES' });
  }, []);

  return (
    <div>
      <header>
        <h1>Target Case Study</h1>
      </header>
      {routes &&
        <RouteSelect routes={routes} />
      }
    </div>
  );
}

export default App;
