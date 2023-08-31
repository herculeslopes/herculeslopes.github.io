import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return <>
    <div className="navbar">
      <div className="navlinks">
        <NavLink to='/home'>Home</NavLink>
        {/* <NavLink to='/home#experiencias'>Home</NavLink> */}
        {/* <Link to='/home#experiencias'>XP</Link> */}
        {/* <a href="/#/home#experiencias">XP</a> */}
        {/* <NavLink to='/roadmap'>Roadmap</NavLink> */}
        {/* <NavLink to='/projects'>Projects</NavLink> */}
      </div>
    </div>
  </>
}

export default Navbar;