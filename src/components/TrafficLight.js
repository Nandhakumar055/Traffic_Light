import React, { useEffect } from 'react';
import { useTraffic } from '../context/TrafficContext';
import Light from './Light';
import Countdown from './Countdown';

const TrafficLight = () => {
  const { state, dispatch } = useTraffic();

  useEffect(() => {
    if (state.emergencyOverride) return; // Skip normal flow in case of emergency override

    const timer = setInterval(() => {
      if (state.timer > 0) {
        dispatch({ type: 'RESET_TIMER', payload: state.timer - 1 });
      } else {
        // Light changing logic based on current light and pedestrian request
        if (state.pedestrianRequest && state.currentLight !== 'red') {
          // If a pedestrian request was made, change light to red
          dispatch({ type: 'CHANGE_LIGHT', payload: 'red' });
          dispatch({ type: 'RESET_TIMER', payload: 5 }); // 5 seconds for pedestrians to cross
          dispatch({ type: 'REQUEST_CROSSING', payload: false }); // Reset pedestrian request
        } else {
          // Normal light sequence
          switch (state.currentLight) {
            case 'green':
              dispatch({ type: 'CHANGE_LIGHT', payload: 'yellow' });
              dispatch({ type: 'RESET_TIMER', payload: 3 });
              break;
            case 'yellow':
              dispatch({ type: 'CHANGE_LIGHT', payload: 'red' });
              dispatch({ type: 'RESET_TIMER', payload: 7 });
              break;
            case 'red':
              dispatch({ type: 'CHANGE_LIGHT', payload: 'green' });
              dispatch({ type: 'RESET_TIMER', payload: 10 });
              break;
            default:
              break;
          }
        }
      }
    }, 1000);

    return () => clearInterval(timer); // Clean up the timer
  }, [state.currentLight, state.timer, dispatch, state.pedestrianRequest, state.emergencyOverride]);

  return (
    <>
    <div className="traffic-light">
      <Light color="red" active={state.currentLight === 'red'} />
      <Light color="yellow" active={state.currentLight === 'yellow'} />
      <Light color="green" active={state.currentLight === 'green'} />
    </div>
    <Countdown />
    </>
  );
};

export default TrafficLight;
