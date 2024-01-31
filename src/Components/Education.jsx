import styled from "styled-components"
import education from "@/data/education.json";

const StyledEducation = styled.section`
  .timeline {
    display: grid;
    grid-template-columns: 3px 500px 1fr;
    
    .middle, .right {
      margin: 0 20px 20px 20px;
    }

    .left {
      position: relative;
      background-color: white;

      
      .marker {
        position: absolute;

        top: 0;
        left: 0;
        left: 50%;

        transform: translateX(-50%);
        
        width: 15px;
        height: 15px;

        border-radius: 50%;
        background-color: white;
      }
    }

      .middle {

        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0.2);
        height: 300px;
        img {

        border-radius: 5px;
        object-fit: cover;
      }
      }
      
      .right {

        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
`

const Education = () => {

  return <StyledEducation>

    <h2>EDUCAÇÃO</h2>

    <div className="timeline">
      {education.map(school => <>

        <div className="left">
          <div className="marker"></div>
        </div>

        <div className="middle">
        {/* <img src="https://lh3.googleusercontent.com/proxy/4EKI2B5JI7voY2vjMfISsLm8EzOQ0Q-dee79ovry2cEmXi4i8whXQ3y6-o1PKcXzq_GTJFBjMuYpNCTsgAI20uUnmP514936M9w09RVsRc3bwYRJYbItGcm6tTZu_5v7N54" alt="" /> */}
        </div>

        <div className="right">

        </div>
      </>)}
  </div>

  </StyledEducation >
}

export default Education;