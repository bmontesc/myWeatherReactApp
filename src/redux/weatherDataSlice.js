import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cities:[]
};

export const weatherDataSlice = createSlice ({
    name: "weatherData",
    initialState,
    reducers:{
        addCity: (state, action) => {
            state.cities.push(action.payload);
        },
        removeCity: (state, action) => {
            const id = action.payload;
            state.cities = state.cities.filter(city => city.id != id);
        }
    },
});

export const { addCity, removeCity } = weatherDataSlice.actions;
export default weatherDataSlice.reducer;