import './styles.scss'
import { repeatTag } from '@/util/components';

const Art = () => {
  return <>
    <main className="canvas-wrapper">
      <div className="canvas">
        <div className="art art-1">

          <div className="circular-frame">

            <div className='sky'>
              <div className="boat">
                <div className="accomodation">
                  <div className="windows">
                    {repeatTag(<div className="window"></div>, 11)}
                  </div>

                </div>
                <div className="hull"></div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </main>
  </>
}

export default Art;