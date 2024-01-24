import React from 'react';
import './App.css';
import AppBar from '@mui/material/AppBar';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CityWeatherGrid from './components/CityWeatherGrid/CityWeatherGrid';

const data = [
  {
    city: "San Francisco",
    current: 68,
    conditions: "Cloudy",
    low: 45,
    high: 70,
    humidity: 23
  },
  {
    city: "New York",
    current: 58,
    conditions: "Sunny",
    low: 50,
    high: 62,
    humidity: 20
  },
  {
    city: "Chicago",
    current: 72,
    conditions: "Sunny",
    low: 52,
    high: 75,
    humidity: 31
  }
]

function App() {
  return (
    <div className="container">
      <AppBar position="relative">
        <Toolbar>
          <ThunderstormIcon sx={{ mr: 2 }} />
          <Typography variant="h4" color="inherit" noWrap>
            My Weather App
          </Typography>
        </Toolbar>
      </AppBar>
      <CityWeatherGrid />
    </div>
  );
}

export default App;
