import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import CloudRoundedIcon from '@mui/icons-material/CloudRounded';
import Typography from '@mui/material/Typography';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { indigo, blueGrey, blue, red } from '@mui/material/colors';

const CityWeather = props => {
  const { cityName, currentTemp, lowTemp, highTemp } = props;

  return (
    <div className="CityWeather">
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', background: indigo[800], borderRadius: 2, color: indigo[50]}}>
            <CardContent>
                <Box>
                    <Typography variant="h5">
                        {cityName}
                    </Typography>
                    <Typography variant="h2">
                        {currentTemp} F
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' , alignItems: 'center'}}>
                    <CloudRoundedIcon sx={{ fontSize: 150}}/>
                    <Typography sx={{marginTop: -2, marginBottom: 2}}>Cloudy</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', padding: 2, justifyContent: 'space-between', borderRadius: 2, background: indigo[500]}}>
                    <Box sx={{ display: 'flex', alignItems: 'center'}}>
                        <KeyboardDoubleArrowDownIcon sx={{ color: blue[500] }} />
                        {lowTemp} F
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center'}}>
                        <KeyboardDoubleArrowUpIcon sx={{ color: red[500] }}/>
                        {highTemp} F
                    </Box>
                </Box>
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