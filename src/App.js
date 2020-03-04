import React from "react";
import "./App.css";
import Nav from './Components/Nav/Nav';
import NasaPotd from './Components/POTD/NASAPOTD';

function App() {
  return (
    <div className="App">
      <Nav />
      <NasaPotd />
    </div>
  );
}

export default App;
