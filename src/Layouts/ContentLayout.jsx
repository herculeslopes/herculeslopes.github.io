import { Outlet } from "react-router-dom";

const ContentLayout = ({ children }) => {
  return <>
    <div className="content">
      <Outlet />
    </div>
  </>
}

export default ContentLayout;