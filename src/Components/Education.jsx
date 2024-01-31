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
        height: 300px;
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0.2);
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }

      .middle {
        position: relative;
        
        img {
          position: absolute;
          
          height: 100%;
          /* border-radius: 5px; */
          /* width: max-content; */
          object-fit: cover;

          &:nth-child(1) {
            top: 0;
            bottom: 0;
            left: 0;
            right: 100%;
          }
          
          &:nth-child(2) {
            top: 0;
            left: calc(200%/3);
            
          }
          
          &:nth-child(3) {
            top: 0;
            left: calc(200%/3);

          }
        }
      }
      
      .right {
        color: white;

        padding: 0 20px;
        
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0.2);
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }
    }
`

const Education = () => {

  return <StyledEducation>

    <h2>EDUCAÇÃO</h2>

    <div className="timeline">
      {education.map(edu => <>

        <div className="left">
          <div className="marker"></div>
        </div>

        <div className="middle">
          <img src='/assets/img/iserj-1.jpg' alt="" />
          {/* <img src='/assets/img/iserj-2.jpg' alt="" />
          <img src='/assets/img/iserj-3.jpg' alt="" /> */}
          {/* <img src="https://lh3.googleusercontent.com/proxy/4EKI2B5JI7voY2vjMfISsLm8EzOQ0Q-dee79ovry2cEmXi4i8whXQ3y6-o1PKcXzq_GTJFBjMuYpNCTsgAI20uUnmP514936M9w09RVsRc3bwYRJYbItGcm6tTZu_5v7N54" alt="" /> */}
        </div>

        <div className="right">
          <h2>{edu.school}</h2>
        </div>
      </>)}
    </div>

  </StyledEducation >
}

export default Education;