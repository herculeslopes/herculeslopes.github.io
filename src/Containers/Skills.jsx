import { useState } from 'react'
import Skill from '../Components/Skill'
import data from '../data/skills.json'

const Skills = () => {
  const [skills, setSkills] = useState(data);
  
  return <>
    <section>
      <h2>HABILIDADES</h2>

      <div className="skills-container">
          {skills.map(skill => <Skill {...skill} />)}
      </div>
    </section>
  </>
}

export default Skills;