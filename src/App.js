import React from "react";
import "./App.css";
import NasaPotd from './Components/POTD/NASAPOTD';

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <NasaPotd />
    </div>
  );
}

export default App;
