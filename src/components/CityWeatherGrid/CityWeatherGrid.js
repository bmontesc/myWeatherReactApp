import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { addCity } from '../../redux/weatherDataSlice';
import CityWeather from '../CityWeather/CityWeather';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { getWeatherForCity } from '../../api/OpenWeatherMapAPI';
import { useSelector } from "react-redux"

const CityWeatherGrid = () => {
    
    const dispatch = useDispatch();
    const [dataLoaded, setDataLoaded] = useState(false);
    const initialCities = ["Ohio", "Washington DC", "New York"]

    const fetchData = async () => {
        try {
            const promises = initialCities.map(city => getWeatherForCity(city));
            // const weatherData = await getWeatherForCity('Ohio');
            const results = await Promise.all(promises);
            results.forEach(result => dispatch(addCity(result)))
            setDataLoaded(true);
        } catch (error) {
          console.error('Error al obtener el clima:', error);
        }
    };

    useEffect(()=>{
        fetchData();
    },[]);

    const weatherData = useSelector((state) => state.weatherData);
    console.log("Datos del estado", weatherData.cities)

    if (!dataLoaded) {
        return <div>Cargando...</div>;
    }
    
    return (
        <Container sx={{ py: 8 }} >
          <Grid container spacing={3}>
                {weatherData.cities.map(city => <CityWeather key={city.city} {...city} />)}
          </Grid>
        </Container>
    );
};

export default CityWeatherGrid;