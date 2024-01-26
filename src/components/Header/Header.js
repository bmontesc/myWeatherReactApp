import React, {useState} from 'react'; 
import { Box, AppBar, Toolbar, Typography, Button, InputBase } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { addCity } from '../../redux/weatherDataSlice';
import { useDispatch, useSelector } from "react-redux";
import { getWeatherForCity } from '../../api/OpenWeatherMapAPI';
import { Link } from 'react-router-dom';

const theme = createTheme({
    palette: {
      primary: {
        main: '#dce775',
        light: '#f0f4c3',
        dark:  '#cddc39',
    },
      secondary: {
        main: '#cddc39',
        light: '#dce775',
        dark:  '#afb42b',
    },
    },
});

const Search = styled('div')(({ theme }) => ({

    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
            width: '20ch',
        },
        },
    },
}));

export default function Header() {

    const [search, setSearch ] = useState("");
    const dispatch = useDispatch();

    const weatherData = useSelector((state) => state.weatherData);

    const fetchData = async () => {
        try {
            const newCity = await getWeatherForCity(search);
            console.log(newCity)
            console.log(weatherData)
            if (weatherData.cities.some(city => city.city === newCity.city)) {
                setSearch("")
            } else {
                dispatch(addCity(newCity));
                setSearch("")
            }
        } catch (error) {
          console.error('Error al obtener el clima:', error);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                                <Link to={`/`}>My Weather App</Link>
                            </Typography>
                        <Search onChange={(e) => {setSearch(e.target.value)}}>
                            <SearchIconWrapper>
                            <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                            value={search}
                            placeholder="Search city…"
                            inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <Button variant="contained" color='secondary' onClick={fetchData}> Add </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
};