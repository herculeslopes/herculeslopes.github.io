import experience from '@/data/experience.json';
import { version } from 'react';
import styled from 'styled-components';




const StyledExperience = styled.section`
  display: flex;
  flex-flow: column;
  
  .timeline {
    display: grid;
    padding: 25px;
    grid-template-columns: 1fr 3px 1fr;
    
    
    .period {
      margin: 0 50px 50px 50px;
      
      &.left {
        text-align: right;
      }
    }
    
    .middle {
      position: relative;
      background-color: white;
      
      .company-logo {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 75px;
        height: 75px;
        border-radius: 50%;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      }
    }
    
    .description {
      margin: 0 50px 50px 50px;
      padding: 0 1.5em;
      color: white;
      
      min-height: 200px;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 5px;

    }
    
  }

`

const Experience = () => {
  return <>
    <StyledExperience>
      <h2>EXPERIÊNCIA</h2>

      <div className='timeline'>

        {experience.map((exp, index) => <>
          {index % 2 == 0 ? <Description description={exp.description} /> : <Period period={`${exp.date_start} - ${exp.date_end}`} position=' left' />}

          <div className="middle">
            <img src={exp.org_icon} alt="" className="company-logo" />
          </div>

          {index % 2 == 0 ? <Period period={`${exp.date_start} - ${exp.date_end}`} position=' right' /> : <Description description={exp.description} />}
        </>)}


      </div>

    </StyledExperience>
  </>
}

const Period = ({ period, position }) => {
  return <>
    <div className={"period".concat(position)}>
      <span>{period}</span>
    </div>
  </>
}

const Description = ({ description }) => {
  return <>
    <div className="description">
      <h3>PortosRio</h3>
      <p>
        {description}
      </p>
    </div>
  </>
}

// ,
//     {
//         "job": "Estagiário",
//         "organization": "PortosRio",
//         "date_start": "07/2022",
//         "date_end": "atual",
//         "org_icon": "/assets/icons/portosrio-logomarca.jpg"
//     }


export default Experience;