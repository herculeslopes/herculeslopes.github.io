import { useNavigate } from "react-router-dom";

import { FaWindows, FaLinux, FaApple, FaChrome } from "react-icons/fa"
const Project = (props) => {
  // ["windows", "linux", "mac", "ios", "android", "web"]
  const navigate = useNavigate();

  const {
    slug,
    img,
    name,
    organization,
    description,
  } = props;

  const platforms = props.platforms.map(platform => {
    switch (platform) {
      case 'windows':
        return <FaWindows />;
    
      case 'linux':
        return <FaLinux />;
      
      case 'mac':
        return <FaApple />;

      case 'web':
        return <FaChrome />;
    }
  })

  return <>
    <article className="project-card-wrapper" onClick={() => navigate(`/projects/${slug}`)}>
      <div className="project-card">
        <img src={img} alt="" className="img" />
        <div className="info">
          <h3>{name}</h3>
          <p className="description">{description}</p>

          <div className="platforms">
            {platforms}
          </div>
        </div>
      </div>
    </article>
  </>
}

export default Project;