import experience from '@/data/experience.json';
import styled from 'styled-components';

const StyledExperience = styled.section`

`

const Experience = () => {
  return <>
    {/* <section id='experiencia' className='experience'>
      <h2>EXPERIÊNCIA</h2>

      <div className="experencie-container">
        {experience.map(exp => <>
          {exp.cargo}
        </>)}
      </div>
    </section> */}
    <StyledExperience>
      <h2>EXPERIÊNCIA</h2>

      
    </StyledExperience>
  </>
}

export default Experience;