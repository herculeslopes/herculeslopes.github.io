import { useState } from 'react';
import Project from '../Components/Project';
import data from '../data/projects.json';
import styled from 'styled-components';

const StyledProjects = styled.section`
  .project-list {
    .project-card {
      /* background-color: rgb(255, 255, 255, .2); */
    }
  }
`

const Projects = () => {
  const [projects, setProjects] = useState(data);

  return <>
    <StyledProjects>

      <h2>PROJETOS</h2>

      <div className="projects-container project-list">
        {projects.map(project => <Project {...project} />)}
      </div>
    </StyledProjects>
  </>
}

export default Projects;