import React from 'react'
import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components'

const MainWrapper = styled.main`
  margin: 0 auto;
	padding: 2rem;
  .home {
    display: grid;
    grid-template-columns: 1fr;
  }
  .nav-container {
    position: sticky;
    top: 0;
    background-color: white;
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: end;
    padding-right: 6rem;
    box-shadow: 0em 0em 1em 2em white;

    .nav-items {
      display: flex;
      width: 50%;
      align-items: center;
      justify-content: space-between;
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
    margin: 0 auto;
    margin: 2.5rem 5rem;
    padding: 2rem 0;
    border: 10px var(--pink-leaf) double;
    border-radius: 3em;
  }

`;

const SharedLayout = () => {
  return (
    <MainWrapper>
      <main className='home'>
        <div className='nav-container'>
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
        </div>
        <div className='content-container'>
          <Outlet />
        </div>
      </main>
    </MainWrapper>
  )
}

export default SharedLayout;
