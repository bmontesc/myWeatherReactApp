import React from 'react';
import './App.css';
import CityWeather from './components/CityWeather/CityWeather';
import AppBar from '@mui/material/AppBar';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

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
      <div className="header">
        
      </div>
      <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
              <CityWeather
                cityName="San Francisco"
                currentTemp="68"
                lowTemp="58"
                highTemp="73"
                humidity="23"
              />
              </Grid>
          </Grid>
        </Container>
    </div>
  );
}

export default App;
