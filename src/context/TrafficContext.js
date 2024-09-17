import React, { createContext, useContext, useReducer } from 'react';

const TrafficContext = createContext();

const initialState = {
  currentLight: 'green',
  timer: 10,
  pedestrianRequest: false,
  emergencyOverride: false,
};

const trafficReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_LIGHT':
      return { ...state, currentLight: action.payload };
    case 'REQUEST_CROSSING':
      return { ...state, pedestrianRequest: action.payload };
    case 'RESET_TIMER':
      return { ...state, timer: action.payload };
    case 'EMERGENCY_OVERRIDE':
      return { ...state, emergencyOverride: action.payload };
    default:
      return state;
  }
};

export const TrafficProvider = ({ children }) => {
  const [state, dispatch] = useReducer(trafficReducer, initialState);
  return (
    <TrafficContext.Provider value={{ state, dispatch }}>
      {children}
    </TrafficContext.Provider>
  );
};

export const useTraffic = () => useContext(TrafficContext);
