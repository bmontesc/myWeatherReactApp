const API_KEY = process.env.REACT_APP_OWN_API_KEY;
const baseUrl = 'http://api.openweathermap.org';

export const getWeatherForCity = city => {
  return fetch(`${baseUrl}/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`) 
    .then(response => {
        if (!response.ok) {
        throw new Error('No se pudo obtener la información del clima.');
        }
        return response.json();
    })
    .then((data) => {
        const { main: {temp, temp_min, temp_max}, name , weather } = data;
        const { main } = weather[0];
        const weatherData = {
            city: name,
            currentTemp: temp,
            condition: main,
            minTemp: temp_min,
            maxTemp: temp_max
        }
        return weatherData;
    })
    .catch(error => {
        console.error('Error en la solicitud:', error.message);
        throw error;
      });
};