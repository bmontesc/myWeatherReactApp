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
    },
});

export const { addCity } = weatherDataSlice.actions;
export default weatherDataSlice.reducer;