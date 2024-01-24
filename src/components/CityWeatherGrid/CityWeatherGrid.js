import React from 'react';
import CityWeather from '../CityWeather/CityWeather';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const CityWeatherGrid = props => {
    return (
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
    );
};

export default CityWeatherGrid;