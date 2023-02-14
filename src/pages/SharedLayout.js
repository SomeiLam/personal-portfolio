import React from 'react'
import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components'

const MainWrapper = styled.main`
  width: 98%;
  height: 95vh;
  background: var(--backgroundColor);
  border-radius: 2em;
  margin: 0 auto;
  overflow-y: auto;
  margin-top: 1.2rem;

  .nav-container {
    position: fixed;
    width: 100%;
    margin: 2.5rem -1rem;
    display: flex;
    justify-content: end;
    top: 0;
    left: 0;
    right: 0;
    padding-right: 6rem;
    z-index: 3;

    .nav-items {
      margin: 2rem 2rem 0 0;
      display: flex;
      width: 60%;
      align-items: center;
      justify-content: space-between;
      background: var(--backgroundColor);
      box-shadow: -18em 0em 1em 1em var(--backgroundColor);
    }

    .nav-item {
      width: 120px;
      text-align: center;
      padding: 5px;
      margin: 0 2px;
      white-space: nowrap
    }

    .nav-item:hover, .nav-item:active, .nav-item.active {
      border: 2px dotted;
      border-radius: 1rem;
    }
  }

  .content-container {
    padding-top: 7rem;
  }

`;

const SharedLayout = () => {
  return (
    <div>
      <MainWrapper>
        <section className='nav-container'>
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
              key={3}
              className='nav-item'
            >
              projects
            </NavLink>
            <NavLink
              to={'/contact'}
              key={4}
              className='nav-item'
            >
              contact
            </NavLink>
          </div>
        </section>
        <div className='content-container'>
          <Outlet />
        </div>
      </MainWrapper>
    </div>
  )
}

export default SharedLayout;
