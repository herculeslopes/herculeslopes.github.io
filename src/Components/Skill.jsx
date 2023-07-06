import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skill = (props) => {
  const {
    name,
    percentage,
    description,
  } = props;

  return <>
    <div className='skill'>
      {/* <CircularProgressbar value={percentage} text={name} styles={buildStyles({
            textColor: '#213547',
            pathColor: '#213547',
            trailColor: 'rgba(0, 0, 0, 0)',

      })} /> */}

      <CircularProgressbarWithChildren value={percentage} styles={buildStyles({
        textColor: '#213547',
        pathColor: '#213547',
        trailColor: 'rgba(0, 0, 0, 0)',
      })} >
        <h1>{name}</h1>
        <h2>{`${percentage}%`}</h2>
      </CircularProgressbarWithChildren>
      <div>
      </div>
    </div>
  </>
}

export default Skill;