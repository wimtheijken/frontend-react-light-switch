import React, {useState} from 'react';
import './App.css';

function App() {
    const [light, toggleLight] = useState(false);
    // setLight(true)
    console.log(light)
  return (
    <main className={light ? "on" : "off"}>
      <section>
        <div className="dot"></div>
        <button type="button" onClick={()=> toggleLight(!light)}>{light ? "Turn off" : "Turn on"}</button>
      </section>
    </main>
  );
}

export default App;
