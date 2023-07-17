import { Outlet } from 'react-router-dom'

const ArtLayout = () => {
  return <>
    <main className="canvas-wrapper">
      <div className="canvas">
        <Outlet />
      </div>
    </main>
  </>
}

export default ArtLayout;