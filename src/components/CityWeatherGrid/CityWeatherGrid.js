import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addCity, removeCity } from '../../redux/weatherDataSlice';
import CityWeather from '../CityWeather/CityWeather';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { getWeatherForCity} from '../../api/OpenWeatherMapAPI';

const CityWeatherGrid = () => {
    
    const dispatch = useDispatch();
    const [dataLoaded, setDataLoaded] = useState(false);
    const initialCities = ["Ohio", "Washington DC", "New York"];
    const weatherData = useSelector((state) => state.weatherData);

    const removeData = (id) => {
        console.log(id)
        console.log(weatherData);
        dispatch(removeCity(id));
        console.log(weatherData);
    }

    const fetchData = async () => {
        try {
            if (!(weatherData.cities.length > 0)) {
                const promises = initialCities.map(city => getWeatherForCity(city));
                const results = await Promise.all(promises);
                results.forEach(result => dispatch(addCity(result)))
                setDataLoaded(true);
            } else {
                setDataLoaded(true)
            }
        } catch (error) {
          console.error('Error al obtener el clima:', error);
        }
    };

    useEffect(()=>{
        fetchData()
    });

    if (!dataLoaded) {
        return <div>Loading...</div>;
    }
    
    return (
        <Container sx={{ py: 8 }} >
          <Grid container spacing={3}>
                {weatherData.cities.map(city => <CityWeather key={city.city} {...city} onDelete={removeData}/>)}
          </Grid>
        </Container>
    );
};

export default CityWeatherGrid;