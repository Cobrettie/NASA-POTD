import React from 'react';
import NasaPotd from './Components/POTD/NASAPOTD';
import MarsRover from './Components/MarsRover/MarsRover';

const routes = {
  '/': () => <NasaPotd />
  '/MarsRover': () => <MarsRover />
}

export default routes;