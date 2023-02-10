import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  .title-container {
    display: flex;
    margin: 0 auto;
  }

  .my-name {
    padding: 2rem;
    align-items: center; 
    svg {
      margin: 1em;
      height: 1.5em;
      width: 1.5em;
    }
     
    h3, h5 {
      font-family: 'Pacifico';
    }
  }

  .avatar {
    img {
      width: 120px;
      border: 10px var(--pink-leaf) double;
      border-radius: 5rem;
    }
  }

  .content {
    width: 60%;
    margin: 0 auto;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <div className='title-container'>
        <div className='avatar'>
          <img src='https://avatars.githubusercontent.com/u/86380144?v=4' alt='avatar' />
        </div>
        <div className='my-name'>
          <h3>Hi &#129306;  I'm Amy Lam</h3>
          <h5>Welcome to my portfolio website</h5>
        </div>
      </div>

      <div className='content'>
        <p>
          I'm a Frontend Web Developer who is passionate about building meaningful software.
          Some technologies I enjoy working with include React and Redux using JavaScript.
        </p>
        <p>
          Recently, I am interested about blockchain, NFTs, and cryptocurrency.
        </p>
        <p>
          I am also self learning mobile development with Flutter, game development with Unreal Engine
          and Ethereum Blockchain during my free time.
        </p>
      </div>
    </Wrapper>
  );
};

export default Home;
