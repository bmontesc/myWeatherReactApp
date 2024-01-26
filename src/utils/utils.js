import CloudRoundedIcon from '@mui/icons-material/CloudRounded';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import ThunderstormRoundedIcon from '@mui/icons-material/ThunderstormRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import WaterRoundedIcon from '@mui/icons-material/WaterRounded';
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import { indigo, blueGrey, deepPurple, teal, cyan, blue, pink } from '@mui/material/colors';

function useConditionUI() {
    
    let conditionUI = {
        cardIcon:  null,
        cardColor: null
    }

    const setConditionUI = (condition) => {
    
        switch (condition) {
            case 'Clouds':
                conditionUI.cardIcon = (<CloudRoundedIcon sx={{ fontSize: 150}}/>);
                conditionUI.cardColor = indigo;
                return conditionUI;
      
            case 'Thunderstorm':
                conditionUI.cardIcon = (<ThunderstormRoundedIcon sx={{ fontSize: 150}}/>)
                conditionUI.cardColor = deepPurple;
                return conditionUI;
      
            case 'Drizzle':
            case 'Rain':
                conditionUI.cardIcon = (<span class="material-symbols-rounded" style={{fontSize: 180}}>rainy</span>)
                conditionUI.cardColor = blueGrey;
                return conditionUI;
        
            case 'Snow':
                conditionUI.cardIcon = (<AcUnitRoundedIcon sx={{ fontSize: 150}}/>)
                conditionUI.cardColor = teal;
                return conditionUI;
      
            case 'Clear':
                conditionUI.cardIcon = (<LightModeRoundedIcon sx={{ fontSize: 150}}/>)
                conditionUI.cardColor = blue;
                return conditionUI;
        
            case 'Mist':
            case 'Smoke':
            case 'Haze':
            case 'Dust':
            case 'Fog':
            case 'Sand':
            case 'Ash':
            case 'Squall':
            case 'Tornado':
                conditionUI.cardIcon = (<WaterRoundedIcon sx={{ fontSize: 150}}/>)
                conditionUI.cardColor = cyan;
                return conditionUI;
      
            default:
                conditionUI.cardIcon = (<QuestionMarkRoundedIcon sx={{ fontSize: 150}}/>)
                conditionUI.cardColor = pink;
                return conditionUI;
      }
    };

    return [conditionUI, setConditionUI]
}

export default useConditionUI;