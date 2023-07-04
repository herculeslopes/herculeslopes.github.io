import { useState } from "react";
import Project from "../Components/Project";

import data from '../data/projects.json';

const Home = () => {
  const [projects, setProjects] = useState(data);

  return <>
    <div className="home">
      <section className="presentation">
        <h1>HÉRCULES LOPES</h1>
        <h2>DESENVOLVEDOR</h2>
      </section>

      <hr />

      <section>
        <h2>PROJETOS</h2>
        <div className="projects-container">
          {projects.map(project => <Project {...project} />)}
        </div>
      </section>

      {/* <hr /> */}

      {/* <section>
        <h2>HABILIDADES</h2>
      </section> */}
    </div>
  </>
}

export default Home;