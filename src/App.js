import React from 'react';
import TrafficLight from './components/TrafficLight';
import PedestrianButton from './components/PedestrianButton';
import EmergencyButton from './components/EmergencyButton';
import { TrafficProvider } from './context/TrafficContext';
import './App.css';

function App() {
  return (
    <TrafficProvider>
      <div className="app">
        <h1>Traffic Light Simulator</h1>
        <TrafficLight />
        <PedestrianButton />
        <EmergencyButton />
      </div>
    </TrafficProvider>
  );
}

export default App;
