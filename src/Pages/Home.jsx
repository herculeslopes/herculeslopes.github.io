import Experience from '../Components/Experience';
import Presentation from '../Components/Presentation';
import Projects from "../Containers/Projects";
import Skills from '../Containers/Skills';

import Education from '../Components/Education';
import styled from 'styled-components';
import Courses from '../Components/Courses';

const StyledHome = styled.main`
  padding-bottom: 20px;
`

const Home = () => {
  return <StyledHome className='home'>

    <Presentation />
    <Projects />
    <Skills />
    <Experience />
    {/* <Education /> */}
    <Courses />

  </StyledHome>
}

export default Home;