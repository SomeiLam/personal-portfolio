import React from 'react'
import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components'

const MainWrapper = styled.main`
  width: 90%;
  height: 90vh;
  margin: 0 auto;
  background: var(--backgroundColor);
  border-radius: 2em;
`;

const NavWrapper = styled.section`
  margin: 2rem;
  display: flex;
  justify-content: space-between;

  .nav-items {
    margin: 2rem 2rem 0 0;
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-between;
  }

  .nav-item {
    width: 160px;
    text-align: center;
    border: 2px solid;
    padding: 5px;
    margin: 0 2px;
  }
`;

const SharedLayout = () => {
  return (
    <div>
      <MainWrapper>
        <NavWrapper>
          <div className='blank'></div>
          <div className='nav-items'>
            <NavLink
              to={'/'}
              key={1}
              className='nav-item'
            >
              home
            </NavLink>
            <NavLink
              to={'/about'}
              key={2}
              className='nav-item'
            >
              about me
            </NavLink>
            <NavLink
              to={'/projects'}
              key={2}
              className='nav-item'
            >
              projects
            </NavLink>
            <NavLink
              to={'/contact'}
              key={2}
              className='nav-item'
            >
              contact
            </NavLink>
          </div>

        </NavWrapper>
        <div>
          <Outlet />
        </div>
      </MainWrapper>
    </div>
  )
}

export default SharedLayout;
