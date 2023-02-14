import React from 'react';
import styled from 'styled-components';
import SkillItem from '../components/SkillItem';
import {
  CSS,
  ExpressJS,
  Firebase,
  Flutter,
  Git,
  GitHub,
  Html,
  JavaScript,
  Jest,
  MaterialUI,
  MongoDB,
  Node,
  PostgreSQL,
  Postman,
  Python,
  R,
  ReactJS,
  Redux,
  TailwindCSS,
  TypeScript,
  Vercel,
  VSCode,
} from '../assets/icons';

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  
  h3 {
      font-family: 'Pacifico';
  }

  .title-container {
    display: flex;
    margin: 0 auto;
  }

  .avatar {
    align-self: center;
  }

  .my-name {
    padding: 2rem;
    align-items: center; 
    svg {
      margin: 1em;
      height: 1.5em;
      width: 1.5em;
    }
    h5 {
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

  .description {
    p {
      text-align: center;
      font-weight: 600;
    }
  }

  .content {
    margin-top: 2rem;
    .content-title {
      border-bottom: 1px solid var(--night-blue);
    }
    .skills {
      margin: 1rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
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
      <div className='description'>
        <p>
          I'm a &#11088; Frontend Web Developer &#11088; who is passionate about building meaningful software.
        </p>
      </div>
      <div className='content'>
        <div className='content-title'>
          <h3>My Skills</h3>
        </div>
        <div className='skills'>
          <SkillItem icon={JavaScript} text='JavaScript' />
          <SkillItem icon={TypeScript} text='TypeScript' />
          <SkillItem icon={Html} text='HTML' />
          <SkillItem icon={CSS} text='CSS' />
          <SkillItem icon={ReactJS} text='ReactJS' />
          <SkillItem icon={Redux} text='Redux' />
          <SkillItem icon={Node} text='Node' />
          <SkillItem icon={ExpressJS} text='ExpressJS' />
          <SkillItem icon={MongoDB} text='MongoDB' />
          <SkillItem icon={Git} text='Git' />
          <SkillItem icon={GitHub} text='GitHub' />
          <SkillItem icon={VSCode} text='VSCode' />
          <SkillItem icon={Flutter} text='Flutter' />
          <SkillItem icon={Python} text='Python' />
          <SkillItem icon={R} text='R' />
          <SkillItem icon={Firebase} text='Firebase' />
          <SkillItem icon={MaterialUI} text='MaterialUI' />
          <SkillItem icon={Postman} text='Postman' />
          <SkillItem icon={TailwindCSS} text='TailwindCSS' />
          <SkillItem icon={Jest} text='Jest' />
        </div>
      </div>
    </Wrapper >
  );
};

export default Home;
