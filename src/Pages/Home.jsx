import Presentation from '../Components/Presentation';
import Projects from "../Containers/Projects";
import Skills from '../Containers/Skills';


const Home = () => {

  const divideSections = (...sections) => {
    return sections.reduce((acc, current, index) => {
      if (index !== sections.length - 1) {
        acc.push(current, <hr />)
      } else {
        acc.push(current)
      }
      return acc;
    }, []);

  }

  return <>
    <div className="home">
      {/* <Presentation />
      <hr />
      <Projects />
      <hr />
      <Skills /> */}

      {divideSections(
        <Presentation />,
        <Projects />,
        <Skills />,
      )}
      {/* <hr /> */}

      {/* <section>
        <h2>HABILIDADES</h2>
      </section> */}
    </div>
  </>
}

export default Home;