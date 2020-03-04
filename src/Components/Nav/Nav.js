import React from 'react';
import { useRoutes, A } from 'hookrouter';
import routes from '../../routes';
import './Nav.css';

function Nav() {
  const routeResult = useRoutes(routes)
  return (

    <div>
      <nav>
        <div>
          <h1><A href='/'>Astronomy Photo of the Day</A></h1>
        </div>

        <div>
          <h2><A href='/MarsRover'>Mars Rover Photos</A></h2>
        </div>
      </nav>
      {routeResult}
    </div>
  )
}

export default Nav;