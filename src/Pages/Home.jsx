import Projects from "../Containers/Projects";
import Skills from '../Containers/Skills';


const Home = () => {

  return <>
    <div className="home">
      <section className="presentation">
        <h1>HÉRCULES LOPES</h1>
        <h2>DESENVOLVEDOR</h2>
      </section>

      <hr />

      <Projects />

      <hr />


      <Skills />

      {/* <hr /> */}

      {/* <section>
        <h2>HABILIDADES</h2>
      </section> */}
    </div>
  </>
}

export default Home;