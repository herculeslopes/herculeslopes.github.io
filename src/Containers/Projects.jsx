import { useState } from 'react';
import Project from '../Components/Project';
import data from '../data/projects.json';


const Projects = () => {
  const [projects, setProjects] = useState(data);

  return <>
    <section>
      <h2>PROJETOS</h2>

      <div className="projects-container">
        {projects.map(project => <Project {...project} />)}
      </div>
    </section>
  </>
}

export default Projects;