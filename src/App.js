import React from 'react';
import './App.css';
import WeatherAppHeader from './components/Header/Header';
import CityWeatherGrid from './components/CityWeatherGrid/CityWeatherGrid';
import CityDetail from './components/CityDetail/CityDetail'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <WeatherAppHeader />
        <Routes>
          <Route path="/" element={<CityWeatherGrid />} />
          <Route path="/forecast/:id" element={<CityDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
