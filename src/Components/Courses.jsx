import { useState } from 'react';
import data from '../data/courses.json'
import styled from "styled-components";
import { nanoid } from 'nanoid';

const StyledCourses_legacy = styled.section`
  perspective: 3000px; 

  .card {
    position: relative;
    height: 300px;
    width: 400px;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    border-radius: 5px;
    
    cursor: pointer;

    &.isFlipped {
      transform: rotateY(180deg);
    }

    div, img {
      position: absolute;
      border-radius: inherit;
      backface-visibility: hidden;
    }
    
    img {
      width: 100%;
      object-fit: cover;
    }

    div {
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, .2);
      transform: rotateY(180deg);

    }
  }
`

const Courses_legacy = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [courses, setCourses] = useState(data.map(item => ({ id: nanoid(), ...item, isFlipped: false })));

  const flipCard = (id) => {
    setCourses(courses.map(course => course.id === id ? { ...course, isFlipped: !course.isFlipped } : course));
  }

  return <StyledCourses_legacy>

    <h2>CURSOS</h2>

    {courses.map(course => <>
      <div className={"card".concat(course.isFlipped ? ' isFlipped' : '')} onClick={() => flipCard(course.id)}>
        <img src={course.img} alt="" />
        <div></div>
      </div>
    </>)}

  </StyledCourses_legacy>
}

const StyledCourses = styled.section`
  .card-list {
    /* display: flex;
    margin: auto;
    flex-wrap: wrap;
    width: fit-content;
    gap: 50px; */

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;
  }

  .card {
    /* height: 300px;
    width: 400px; */
    border-radius: 5px;
    
    cursor: pointer;
    
    &.isFull {
      position: fixed;

      top: 50%;
      left: 50%;

      /* width: 50%;
      height: 50%; */

      height: 90%;
      width: max-content;

      transform: translate(-50%, -50%);
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
    
    img {
      height: 100%;
      width: 100%;

      object-fit: cover;
      transition: width linear 1s, height linear 1s;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    
  }
`

const Courses = () => {
  const [courses, setCourses] = useState(data.map(item => ({ id: nanoid(), ...item, isFull: false })));
  const [fullCard, setFullCard] = useState(null);

  // const fullScreen = (id) => {
  //   setCourses(courses.map(course => course.id === id ? { ...course, isFull: !course.isFull } : course));
  // }

  return <StyledCourses>
    <h2>CURSOS</h2>

    <div className="card-list">
      {courses.map(course => <>

        <div className={"card".concat(course.id === fullCard ? ' isFull' : '')} onClick={() => setFullCard((prevFullCard) => prevFullCard ? null : course.id)}>
          <img src={course.img} alt="" />
          <div></div>
        </div>

        {/* <div className={"card".concat(course.isFull ? ' isFull' : '')} onClick={() => fullScreen(course.id)}>
          <img src={course.img} alt="" />
          <div></div>
        </div>

        <div className={"card".concat(course.isFull ? ' isFull' : '')} onClick={() => fullScreen(course.id)}>
          <img src={course.img} alt="" />
          <div></div>
        </div> */}

      </>)}
    </div>
  </StyledCourses>
}

export default Courses;