import React from 'react';
import { useTraffic } from '../context/TrafficContext';

const PedestrianButton = () => {
  const { state, dispatch } = useTraffic();

  const handlePedestrianRequest = () => {
    if (!state.pedestrianRequest && state.currentLight !== 'red') {
      dispatch({ type: 'REQUEST_CROSSING', payload: true });
    }
  };

  return (
    <button onClick={handlePedestrianRequest}>Pedestrian Request</button>
  );
};

export default PedestrianButton;
