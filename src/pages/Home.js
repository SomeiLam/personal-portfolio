import React from 'react';
import { Collapse } from 'antd';
import styled from 'styled-components';
import SkillSet from '../components/SkillSet';
import {
  Ant,
  Bootstrap,
  Chai,
  CSS,
  Cypress,
  Dart,
  ExpressJS,
  Firebase,
  Flutter,
  Git,
  GitHub,
  Html,
  JavaScript,
  Jest,
  MaterialUI,
  Mocha,
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
    align-self: center;
    img {
      width: 120px;
      border-radius: 5rem;
    }
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
    .ant-collapse-header-text {
      font-size: 1.2rem;
      font-weight: 500;
      text-transform: capitalize;
    }
    .ant-collapse-arrow {
        margin-top: .5rem;
        font-size: 1.2rem !important;
      }
  }
`;

const { Panel } = Collapse;

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
        <Collapse defaultActiveKey={['1', '2']} ghost>
          <Panel className='skill-title' header='Web Frontend Development' key='1'>
            <SkillSet
              iconArray={[
                { icon: JavaScript, text: 'JavaScript' },
                { icon: TypeScript, text: 'TypeScript' },
                { icon: Html, text: 'HTML' },
                { icon: CSS, text: 'CSS' },
                { icon: ReactJS, text: 'ReactJS' },
                { icon: Redux, text: 'Redux' },
                { icon: TailwindCSS, text: 'TailwindCSS' },
                { icon: MaterialUI, text: 'MaterialUI' },
                { icon: Ant, text: 'Ant' },
                { icon: Bootstrap, text: 'Bootstrap' },
              ]}
            />
          </Panel>
          <Panel className='skill-title' header='Web Backend Development' key='2'>
            <SkillSet
              iconArray={[
                { icon: Node, text: 'Node' },
                { icon: ExpressJS, text: 'ExpressJS' },
                { icon: MongoDB, text: 'MongoDB' },
                { icon: Firebase, text: 'Firebase' },
                { icon: PostgreSQL, text: 'PostgreSQL' },
                { icon: Postman, text: 'Postman' },
              ]}
            />
          </Panel>
          <Panel className='skill-title' header='Testing Library' key='3'>
            <SkillSet
              iconArray={[
                { icon: Jest, text: 'Jest' },
                { icon: Cypress, text: 'Cypress' },
                { icon: Chai, text: 'Chai' },
                { icon: Mocha, text: 'Mocha' },
              ]}
            />
          </Panel>
          <Panel className='skill-title' header='Mobile Developmet' key='4'>
            <SkillSet
              iconArray={[
                { icon: Dart, text: 'Dart' },
                { icon: Flutter, text: 'Flutter' },
              ]}
            />
          </Panel>
          <Panel className='skill-title' header='Additional Skills' key='5'>
            <SkillSet
              iconArray={[
                { icon: Python, text: 'Python' },
                { icon: R, text: 'R' },
                { icon: Git, text: 'Git' },
                { icon: GitHub, text: 'GitHub' },
                { icon: VSCode, text: 'VSCode' },
                { icon: Vercel, text: 'Vercel' },
              ]}
            />
          </Panel>
        </Collapse>
      </div>
    </Wrapper >
  );
};

export default Home;
