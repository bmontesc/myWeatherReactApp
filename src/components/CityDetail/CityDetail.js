import React, {useState, useEffect} from 'react';
import { Card, CardContent, Box, Typography, Container} from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { cyan, red } from '@mui/material/colors';
import { useDispatch, useSelector } from "react-redux";
import { addCityForecast, clearData } from '../../redux/weatherForecastSlice';
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
            dispatch(clearData())
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
            <div style={{ marginTop: 30, display: 'flex', flexDirection: 'row' , alignItems: 'center', justifyContent:"space-evenly"}}>
                <Card sx={{height: '100%', display: 'flex', flexDirection: 'column', background: conditionUI.cardColor[800], borderRadius: 5, color: conditionUI.cardColor[50]}}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column' , alignItems: 'center'}}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' , alignItems: 'center'}}>
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
                            <Box sx={{ display: 'flex', alignItems: 'center', padding: 3, justifyContent: 'space-between', borderRadius: 3, background: conditionUI.cardColor[700]}}>
                                <Box sx={{ display: 'flex', alignItems: 'center', fontSize: 20 }}>
                                    <KeyboardDoubleArrowDownIcon sx={{ color: cyan["A200"], fontSize: 30 }} />
                                    {minTemp} F
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', fontSize: 20 }}>
                                    <KeyboardDoubleArrowUpIcon sx={{ color: red[500],  fontSize: 30  }}/>
                                    {maxTemp} F
                                </Box>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
                <Card sx={{  height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 5}}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column' , alignItems: 'center'}}>
                        <Typography variant='h5' sx={{ fontWeight: 'bold'}}>Forecast for the next 5 days</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                            {weatherForecast[0].map(day => {
                                setConditionUI(day.weatherCondition);
                                return (<Box key={day.dt} sx={{ margin: 3, padding: 2, borderRadius: 3,display: 'flex', flexDirection:'column', alignItems:'center', color: conditionUI.cardColor[50], background: conditionUI.cardColor[800], justifyContent: 'space-between'}}>
                                    <Typography variant='h5' sx={{ fontWeight: 'bold'}}>{day.dt.toLocaleString('en-US', {weekday: "long"})}</Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' , alignItems: 'center'}}>
                                        {conditionUI.cardIcon}
                                        <Typography sx={{ marginBottom: 2}}>{day.weatherCondition}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', padding: 2, justifyContent: 'space-between', borderRadius: 3, background: conditionUI.cardColor[700]}}>
                                        <Box sx={{ display: 'flex', alignItems: 'center'}}>
                                            <KeyboardDoubleArrowDownIcon sx={{ color: cyan["A200"]}} />
                                            {day.minTemp} F
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center'}}>
                                            <KeyboardDoubleArrowUpIcon sx={{ color: red[500] }}/>
                                            {day.maxTemp} F
                                        </Box>
                                    </Box>
                                </Box>);
                                }
                            )}
                        </Box>
                    </CardContent>
                </Card>
            </div>
        </div> 
    );
};

export default CityWeather;