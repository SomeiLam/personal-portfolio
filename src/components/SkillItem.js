import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  img {
    width: 150px;
  }
  h5 {
    font-weight: 500;
    text-transform: capitalize;
  }
`

const SkillItem = ({ icon, text }) => {
  return (
    <Wrapper>
      <img src={icon} alt={text} className='icon' />
      <h5>
        {text}
      </h5>
    </Wrapper >
  )
};

export default SkillItem;
