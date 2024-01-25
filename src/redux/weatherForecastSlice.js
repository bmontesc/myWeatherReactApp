import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const weatherForecastSlice = createSlice ({
    name: "weatherForecast",
    initialState,
    reducers:{
        addCityForecast: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { addCityForecast } = weatherForecastSlice.actions;
export default weatherForecastSlice.reducer;