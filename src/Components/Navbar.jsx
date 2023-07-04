import { NavLink } from "react-router-dom"

const Navbar = () => {
  return <>
    <div className="navbar">
      <div className="navlinks">
        <NavLink to='/home'>Home</NavLink>
        {/* <NavLink to='/roadmap'>Roadmap</NavLink> */}
        {/* <NavLink to='/projects'>Projects</NavLink> */}
      </div>
    </div>
  </>
}

export default Navbar;