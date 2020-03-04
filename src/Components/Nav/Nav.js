import React from 'react';
import { useRoutes, A } from 'hookrouter';
import routes from '../../routes';
import './Nav.css';

import MarsRover from '../MarsRover/MarsRover';

function Nav() {
  const routeResult = useRoutes(routes)
  return (

    <div>
      <nav>
        <div>
          <h1><A href='/'>Astronomy Photo of the Day</A></h1>
        </div>

        <div>
          <ul>
            <li>
              <A href='/MarsRover'>Mars Rover Photos</A>
            </li>
          </ul>
        </div>
      </nav>
      {routeResult}
    </div>
  )
}

export default Nav;