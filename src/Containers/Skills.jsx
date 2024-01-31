import { useEffect, useState } from 'react'
import Skill from '../Components/Skill'
import data from '../data/skills.json'
import styled from 'styled-components'

const StyledSkills = styled.section`
  margin-bottom: 20px;

  .skill-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px 40px;

    .skill {
      /* margin: 0 20px 20px 20px; */
      
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
  const [skills, setSkills] = useState(data.map(item => ({ ...item, percentage: item.percentage, percentageMax: item.percentage, percentageFull: false })));
  // const [skills, setSkills] = useState(data.map(item => ({ ...item, percentage: 0, percentageMax: item.percentage, percentageFull: false })));

  const [count, setCount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  // useEffect(() => {

  //   console.log(isDone);

  //   if (isDone) return;

  //   const interval = setInterval(() => {

  //     setCount((oldCount) => oldCount + 1);
  //     setSkills((oldSkills) =>
  //       oldSkills.map(skill => {
  //         // let percentage;
          
  //         // if (skill.percentage < skill.percentageMax) {
  //         //   percentage += 1;
  //         // } else {

  //         // }

  //         const percentage = skill.percentage < skill.percentageMax ? skill.percentage + 1 : skill.percentage;
  //         return { ...skill, percentage };
  //       })
  //     )

  //   }, 1000);


  //   return () => {
  //     clearInterval(interval);
  //   }

  // }, [isDone]);

  return <>
    <StyledSkills>
      {/* {count} */}
      <h2>HABILIDADES</h2>
      <button onClick={() => setIsDone(!isDone)}>{isDone ? 'done' : 'not done'}</button>
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