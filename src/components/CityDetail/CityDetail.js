import React, {useState, useEffect} from 'react';
import { Card, Grid,CardContent, Box, Typography} from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { cyan, red } from '@mui/material/colors';
import { useDispatch, useSelector } from "react-redux";
import { addCityForecast } from '../../redux/weatherForecastSlice';
import { useParams } from 'react-router-dom';
import { getWeatherDetailForCity} from '../../api/OpenWeatherMapAPI';
import useConditionUI from '../../utils/utils';

const CityWeather = () => {
    const dispatch = useDispatch();
    const [dataLoaded, setDataLoaded] = useState(false);
    let {id} = useParams();

    const weatherData = useSelector((state) => state.weatherData);
    const { coord, city, currentTemp, condition, minTemp, maxTemp } = weatherData.cities.find(city => city.id == id)
    const [ conditionUI, setConditionUI ] = useConditionUI();
    setConditionUI(condition);

    const fetchData = async () => {
        try {
            const weatherData = await getWeatherDetailForCity(coord);
            dispatch(addCityForecast(weatherData));
            setDataLoaded(true);
        } catch (error) {
          console.error('Error al obtener el clima:', error);
        }
    };

    useEffect(()=>{
        fetchData();
    },[]);
  
    const weatherForecast = useSelector((state) => state.weatherForecast);
    console.log(weatherForecast)

    if (!dataLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <div className="CityWeather">
            <Grid item xs="auto" sx={{margin: 2}}>
                <Card sx={{  height: '100%', display: 'flex', flexDirection: 'column', background: conditionUI.cardColor[800], borderRadius: 5, color: conditionUI.cardColor[50]}}>
                    <CardContent>
                        <Box>
                            <Typography variant="h5">
                                {city}
                            </Typography>
                            <Typography variant="h2">
                                {currentTemp} F
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' , alignItems: 'center'}}>
                            {conditionUI.cardIcon}
                            <Typography sx={{ marginBottom: 2}}>{condition}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', padding: 2, justifyContent: 'space-between', borderRadius: 3, background: conditionUI.cardColor[700]}}>
                            <Box sx={{ display: 'flex', alignItems: 'center'}}>
                                <KeyboardDoubleArrowDownIcon sx={{ color: cyan["A200"] }} />
                                {minTemp} F
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center'}}>
                                <KeyboardDoubleArrowUpIcon sx={{ color: red[500] }}/>
                                {maxTemp} F
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </div> 
    );
};

export default CityWeather;