import experience from '@/data/experience.json';

const Experience = () => {
  return <>
    <section id='experiencia' className='experience'>
      <h2>EXPERIÊNCIA</h2>

      <div className="experencie-container">
        {experience.map(exp => <>
          {exp.cargo}
        </>)}
      </div>
    </section>
  </>
}

export default Experience;