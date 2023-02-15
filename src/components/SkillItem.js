import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;
  img {
    height: 100px;
  }
  .skill-name {
    margin: .5rem 0 1.5rem 0;
    font-weight: 700;
    text-transform: capitalize;
  }
`

const SkillItem = ({ icon, text }) => {
  return (
    <Wrapper>
      <img src={icon} alt={text} className='icon' />
      <small className='skill-name'>{text}</small>
    </Wrapper >
  )
};

export default SkillItem;
