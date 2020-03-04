import React from 'react';
import './Nav.css';

import MarsRover from '../MarsRover/MarsRover';

function Nav() {
  return (
    <div>
      <nav>

        <div>
          <h1>Astronomy Photo of the Day</h1>
        </div>

        <div>
          <ul>
            <li>
              <a href='#'>Mars Rover Photos</a>
            </li>
          </ul>
        </div>

      </nav>
    </div>
  )
}

export default Nav;