import './styles.scss';

const Fan = () => {
  return <>
    <div className="fan">
      <div className="blades">
        <div className="blade"></div>
      </div>
      <div className="core">
        <div className="logo">
          <h3>GALAX</h3>
        </div>
      </div>
    </div>
  </>
}

const Art = () => {
  return <>
    <div className="art art-3">
      <div className="gtx1650">
        <div className="brackets">
        </div>
        <div className='body-wrapper'>
          <div className="body">
            <Fan />
            <Fan />
          </div>
          <div className="connectors">
            <div className="connector tiny"></div>
            <div className="connector small"></div>
            <div className="connector big"></div>
            <div className="connector no-pins"></div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Art;