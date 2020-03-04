import React, { useEffect } from 'react';
import axios from 'axios';

function MarsRover() {
  useEffect(() => {
    axios
      .get('https://api.nasa.gov/mars-photos/')
      .then(response => {
        console.log(response);
      })
  })
  
  return (
    <div>
      <h1>Mars Rover Photos</h1>
    </div>
  )
}

export default MarsRover;