import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  padding-top: 5rem;

  .avatar {
    img {
      width: 400px;
      border: 10px var(--pink-leaf) double;
      border-radius: 8rem;
    }
  }
  
`;

const About = () => {
  return (
    <Wrapper>
      <div className='avatar'>
        <img src='https://avatars.githubusercontent.com/u/86380144?v=4' alt='avatar' />
      </div>
    </Wrapper>
  );
};

export default About;
