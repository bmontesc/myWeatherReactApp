import React from 'react';
import './App.css';
import { Button } from '@mui/base/Button';

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>My Weather App</h1>
      </div>
      <div className="contentArea">Weather components will go here</div>
      <Button>Button from MUI</Button>
    </div>
  );
}

export default App;
