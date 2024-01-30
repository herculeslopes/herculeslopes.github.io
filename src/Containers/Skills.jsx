import { useState } from 'react'
import Skill from '../Components/Skill'
import data from '../data/skills.json'
import styled from 'styled-components'

const StyledSkills = styled.section`
  .skill-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    .skill {
      margin: 0 20px 20px 20px;
      
      .progress-bar {
        width: 100%;
        height: 15px;
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 15px;

        .progress {
          position: relative;
          /* background-color: white; */
          background-color: #213547;
          width: 0;
          height: 100%;
          border-radius: inherit;

          .percentage {
            position: absolute;
            top: 0;
            right: 0;
            transform: translateY(-100%);
            color: white;
            font-weight: bold;
          }
        }
      }
    }
  }
`

const Skills = () => {
  const [skills, setSkills] = useState(data);

  return <>
    <StyledSkills>

      <h2>HABILIDADES</h2>

      <div className="skill-list">
        {/* {skills.map(skill => <Skill {...skill} />)} */}
        {skills.map(skill => <>

          <div className="skill">
            <h3 className="label">{skill.name}</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${skill.percentage}%` }}>
                <span className="percentage">{skill.percentage}%</span>
              </div>
            </div>
          </div>

        </>)}
      </div>
    </StyledSkills>
  </>
}

export default Skills;