import React from 'react';
import SkillItem from './SkillItem';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  .title-content {
    margin-top: 2rem;
    font-weight: 500;
    text-transform: capitalize;
  }
  .skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
  }
`

const SkillSet = ({ iconArray, title }) => {
  return (
    <Wrapper>
      {/* <h5 className='title-content'>{title}</h5> */}
      <div className='skills'>
        {iconArray.map(item => <SkillItem icon={item.icon} text={item.text} />)}
      </div>

    </Wrapper >
  )
};

export default SkillSet;
