import React from 'react';
import { useRoutes, A } from 'hookrouter';
import routes from '../../routes';
import './Nav.css';
import styled from 'styled-components';

const MainNav = styled.nav`
  border-bottom: 1px solid #373737;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
`;

function Nav() {
  const routeResult = useRoutes(routes)
  return (

    <div>
      <MainNav>
        <div>
          <h1><A href='/'>Astronomy Photo of the Day</A></h1>
        </div>

        <div>
          <h2><A href='/MarsRover'>Mars Rover Latest Photo</A></h2>
        </div>
      </MainNav>
      {routeResult}
    </div>
  )
}

export default Nav;