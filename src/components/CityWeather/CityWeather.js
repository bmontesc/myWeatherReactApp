import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CityWeather = props => {
  const { cityName, currentTemp, lowTemp, highTemp, humidity } = props;

  return (
    <div className="CityWeather">
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
                component="div"
                sx={{
                    pt: '56.25%',
                }}
                image="https://source.unsplash.com/random?wallpapers"
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    {cityName}
                </Typography>
                <div>
                    <div>
                        Current: {currentTemp} F
                    </div>
                    <div>
                        Low: {lowTemp} F
                    </div>
                    <div>
                        High: {highTemp} F
                    </div>
                    <div>
                        Humidity: {humidity} %
                    </div>
                </div>
            </CardContent>
            <CardActions>
                <Button size="small">View</Button>
                <Button size="small">Delete</Button>
            </CardActions>
        </Card>
    </div> 
  );
};

export default CityWeather;