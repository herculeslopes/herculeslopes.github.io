import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Socials = () => {
  return <>
    <div className="socials">
      <div className="links">
        <a href="#">
          <FaEnvelope />
          <div>
            <span>herculeslopesti@gmail.com</span>
          </div>
        </a>

        <a href="https://github.com/herculeslopes" target='blank'>
          <FaGithub />
          <div>
            <span>https://github.com/herculeslopes</span>
          </div>
        </a>

        <a href="https://linkedin.com/in/herculeslopes" target='blank'>
          <FaLinkedin />
          <div>
            <span>https://linkedin.com/in/herculeslopes</span>
          </div>
        </a>
      </div>
    </div>
  </>
}

export default Socials;