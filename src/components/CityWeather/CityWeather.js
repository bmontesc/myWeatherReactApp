import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { blue, red } from '@mui/material/colors';
import useConditionUI from '../../utils/utils';

const CityWeather = props => {
  
  const { city, currentTemp, condition, minTemp, maxTemp } = props;
  const [ conditionUI, setConditionUI ] = useConditionUI();
  
  setConditionUI(condition);

  return (
    <div className="CityWeather">
        <Grid item xs="auto" sx={{margin: 2}}>
            <Card sx={{  height: '100%', display: 'flex', flexDirection: 'column', background: conditionUI.cardColor[800], borderRadius: 5, color: conditionUI.cardColor[100]}}>
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
                        <Typography sx={{marginTop: -2, marginBottom: 2}}>{condition}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', padding: 2, justifyContent: 'space-between', borderRadius: 3, background: conditionUI.cardColor[500]}}>
                        <Box sx={{ display: 'flex', alignItems: 'center'}}>
                            <KeyboardDoubleArrowDownIcon sx={{ color: blue[500] }} />
                            {minTemp} F
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center'}}>
                            <KeyboardDoubleArrowUpIcon sx={{ color: red[500] }}/>
                            {maxTemp} F
                        </Box>
                    </Box>
                </CardContent>
                <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Delete</Button>
                </CardActions>
            </Card>
        </Grid>
    </div> 
  );
};

export default CityWeather;