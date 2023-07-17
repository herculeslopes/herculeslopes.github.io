import './styles.scss'
import { repeatTag } from '@/util/components';

const Art = () => {
  return <>
    <div className="art art-1">

      <div className="circular-frame">

        <div className='sky'>
          <div className="boat">
            <div className="accomodation">
              <div className="roof">
                <div className="top"></div>
                <div className="bottom"></div>
              </div>
              <div className="windows">
                <div className="top-windows">
                  <div className="window"></div>
                  <div className="window"></div>
                  <div className="window"></div>
                </div>
                {repeatTag(<div className="window"></div>, 11)}
              </div>

            </div>
            <div className="hull"></div>
          </div>
          {/* <div className="wave"> */}
          {/* <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                  <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{ stroke: 'none', fill: 'red' }}></path>
                </svg> */}
          {/* </div> */}
          <div className="wave-wrapper">
            <div className="wave"></div>
          </div>
          {/* <div className="semi-circle"></div> */}
        </div>

      </div>

    </div>
  </>
}

export default Art;