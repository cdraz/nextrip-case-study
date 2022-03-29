import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import React Components
import RouteSelect from '../RouteSelect/RouteSelect';
import DirectionSelect from '../DirectionSelect/DirectionSelect';
import StopSelect from '../StopSelect/StopSelect';

function App() {

  // Store access
  const selectedBus = useSelector(store => store.busRoute);

  return (
    <div>
      <header>
        <h1>Target Case Study</h1>
      </header>
        <RouteSelect />
        { selectedBus.route && <DirectionSelect />}
        { selectedBus.direction && <StopSelect />}
    </div>
  );
}

export default App;
