import React from 'react';
import { useTraffic } from '../context/TrafficContext';

const Countdown = () => {
  const { state } = useTraffic();

  return (
    <div className="countdown">
      {state.timer > 0 ? `${state.timer} seconds remaining` : ''}
    </div>
  );
};

export default Countdown;
