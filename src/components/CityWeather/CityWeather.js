import React from 'react';
import {Button, Card, Grid, CardActions, CardContent, Box, Typography} from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { cyan, red } from '@mui/material/colors';
import useConditionUI from '../../utils/utils';
import { Link } from 'react-router-dom';


const CityWeather = props => {
  
  const { city, currentTemp, condition, id, minTemp, maxTemp, onDelete} = props;
  const [ conditionUI, setConditionUI ] = useConditionUI();
  setConditionUI(condition);

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
                <CardActions sx={{ display: 'flex', flexDirection: 'row' , justifyContent: 'space-around'}}>
                    <Button size="small" sx={{ background: conditionUI.cardColor[700], color: conditionUI.cardColor[50] }}><Link to={`/forecast/${id}`}>View</Link></Button>
                    <Button size="small" sx={{ background: red[500], color: conditionUI.cardColor[50] }} onClick={() => onDelete(id)}>Delete</Button>
                </CardActions>
            </Card>
        </Grid>
    </div> 
  );
};

export default CityWeather;