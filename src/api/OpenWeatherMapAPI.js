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
        const { coord, main: {temp, temp_min, temp_max}, name , sys:{id}, weather } = data;
        const { main } = weather[0];
        const weatherData = {
            coord: coord,
            city: name,
            currentTemp: temp,
            condition: main,
            id: id,
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

export const getWeatherDetailForCity = (coord) => {

    const lat = coord.lat;
    const lon = coord.lon;

    return fetch(`${baseUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
      .then(response => {
            if (!response.ok) {
            throw new Error('No se pudo obtener la información del clima.');
            }
            return response.json();
      })
      .then((data) => {
            const { list } = data;
            const reducedList = list.map((item) => ({dt: item.dt, minTemp: item.main.temp_min, maxTemp: item.main.temp_max, weatherCondition: item.weather[0].main}));

            const weatherForecast = [];
            const currentDate = new Date();

            for (let i = 0; i < reducedList.length; i++){
                const intervalDate = new Date(reducedList[i].dt * 1000);
                const index = intervalDate.getDate() - currentDate.getDate() - 1;
                if (index >= 0) {
                    if (weatherForecast[index] === undefined) {
                        const simplifiedList = { dt: new Date(), weatherCondition: null, minTemp: 0, maxTemp: 0};
                
                        simplifiedList.dt = new Date(reducedList[i].dt * 1000);
                        simplifiedList.weatherCondition = reducedList[i].weatherCondition;
                        simplifiedList.minTemp = reducedList[i].minTemp;
                        simplifiedList.maxTemp = reducedList[i].maxTemp;
                
                        weatherForecast.push(simplifiedList);

                    } else {
                        if (reducedList[i].maxTemp > weatherForecast[index].maxTemp) {
                            weatherForecast[index].maxTemp = reducedList[i].maxTemp;
                        }
                        if (reducedList[i].minTemp < weatherForecast[index].minTemp) {
                            weatherForecast[index].minTemp = reducedList[i].minTemp;
                        }
                    }
                }
            }
            return weatherForecast;
      })
      .catch(error => {
          console.error('Error en la solicitud:', error.message);
          throw error;
        });
  };



//   getInfo(data: IWeatherForecast): ISimplifiedWeatherForecast {
//     const weatherForecast = {} as ISimplifiedWeatherForecast;
//     weatherForecast.id = data.city.id;
//     weatherForecast.name = data.city.name;
//     weatherForecast.list = [];
//     const currentDate = new Date();
//     const dayList: DayList[] = data.list;
//     for (let i = 0; i < dayList.length; i++) {
//       const intervalDate = new Date(dayList[i].dt * 1000);
//       const index = intervalDate.getDate() - currentDate.getDate() - 1;
//       if (index >= 0) {
//         if (weatherForecast.list[index] === undefined) {
//           const simplifiedList: DaySimplifiedList = { dt: new Date(), weather: [], temp_max: 0, temp_min: 0};

//           simplifiedList.dt = new Date(dayList[i].dt * 1000);
//           simplifiedList.weather.push(dayList[i].weather[0]);
//           simplifiedList.temp_max = dayList[i].main.temp_max;
//           simplifiedList.temp_min = dayList[i].main.temp_min;

//           weatherForecast.list.push(simplifiedList);
//         } else {
//           if (dayList[i].main.temp_max > weatherForecast.list[index].temp_max) {
//             weatherForecast.list[index].temp_max = dayList[i].main.temp_max;
//           }
//           if (dayList[i].main.temp_min < weatherForecast.list[index].temp_min) {
//             weatherForecast.list[index].temp_min = dayList[i].main.temp_min;
//           }
//         }
//       }
//     }
//     return weatherForecast;
//   }