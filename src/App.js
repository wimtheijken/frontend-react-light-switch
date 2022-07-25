import React from 'react';
import { ReactComponent as Base } from './assets/base.svg';
import { ReactComponent as Bulb } from './assets/bulb.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="lightbulb-wrapper">
        <div className="light">
          <Bulb/>
          <Base/>
        </div>
      </div>
      <button type="button">Aan / Uit</button>
    </>
  );
}

export default App;
