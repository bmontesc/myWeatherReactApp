import React from 'react';
import './App.css';
import AppBar from '@mui/material/AppBar';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CityWeatherGrid from './components/CityWeatherGrid/CityWeatherGrid';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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
