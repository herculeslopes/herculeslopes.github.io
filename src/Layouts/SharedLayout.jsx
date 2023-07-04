import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Socials from '../Components/Socials';

const SharedLayout = () => {
  return <>
    <div className="header">
      <Navbar />
      {/* <Socials /> */}
    </div>
    
    <Outlet />
  </>
}

export default SharedLayout;