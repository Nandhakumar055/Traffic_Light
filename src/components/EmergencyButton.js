import React from 'react';
import { useTraffic } from '../context/TrafficContext';

const EmergencyButton = () => {
  const { dispatch } = useTraffic();

  const handleEmergencyOverride = () => {
    dispatch({ type: 'EMERGENCY_OVERRIDE', payload: true });
    dispatch({ type: 'CHANGE_LIGHT', payload: 'green' });
    dispatch({ type: 'RESET_TIMER', payload: 10 });

    setTimeout(() => {
      dispatch({ type: 'EMERGENCY_OVERRIDE', payload: false });
    }, 10000);
  };

  return (
    <button onClick={handleEmergencyOverride}>Emergency Override</button>
  );
};

export default EmergencyButton;
