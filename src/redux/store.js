import { configureStore } from '@reduxjs/toolkit';
import weatherDataReducer from './weatherDataSlice';
import weatherForecastReducer from './weatherForecastSlice';

export const store = configureStore({

  reducer: {
    weatherData: weatherDataReducer,
    weatherForecast: weatherForecastReducer,
  },
      
});