import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import React Components
import RouteSelect from '../RouteSelect/RouteSelect';

function App() {

  return (
    <div>
      <header>
        <h1>Target Case Study</h1>
      </header>
        <RouteSelect />
    </div>
  );
}

export default App;
