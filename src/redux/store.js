import { configureStore } from '@reduxjs/toolkit';
import weatherDataReducer from './weatherDataSlice';

export const store = configureStore({

  reducer: {
    weatherData: weatherDataReducer,
  },
      
});