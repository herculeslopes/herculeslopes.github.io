import { useState } from 'react';
import './styles.scss';

const Fan = ({ speed }) => {
  return <>
    <div className="fan-wrapper">
      <div className="fan" style={{ animation: `spin ${speed}s linear infinite` }}>
        <div className="blades">
          <div className="blade"></div>
          <div className="blade"></div>
          <div className="blade"></div>
          <div className="blade"></div>
          <div className="blade"></div>
          <div className="blade"></div>
          <div className="blade"></div>
          <div className="blade"></div>
          <div className="blade"></div>
        </div>
        <div className="core">
          <div className="logo">
            <h3>GTX</h3>
          </div>
        </div>
      </div>
    </div>
  </>
}

const Art = () => {
  const [speed, setSpeed] = useState(5);

  return <>
    <div className="art art-3">
      <div className="gtx1650">
        <div className="brackets">
        </div>
        <div className='body-wrapper'>
          <div className="body">
            <Fan speed={speed} />
            <Fan speed={speed} />
          </div>
          <div className="connectors">
            <div className="connector tiny"></div>
            <div className="connector small"></div>
            <div className="connector big"></div>
            <div className="connector no-pins"></div>
          </div>
        </div>
      </div>

      <div className="slider">
        <span>{speed}s</span>
        <input className='slider' type="range" min='0' max='10' step='.1' value={speed} onChange={(e) => setSpeed(e.target.value)} />
      </div>
    </div>

    {/* <input style={{ position: 'absolute'}} type="number" value={speed} onChange={(e) => setSpeed(e.target.value)} /> */}
  </>
}

export default Art;