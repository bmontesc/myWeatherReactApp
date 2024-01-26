import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const weatherForecastSlice = createSlice ({
    name: "weatherForecast",
    initialState,
    reducers:{
        addCityForecast: (state, action) => {
            state.push(action.payload);
        },
        clearData: () => {
            return initialState;
        }
    },
});

export const { addCityForecast, clearData } = weatherForecastSlice.actions;
export default weatherForecastSlice.reducer;