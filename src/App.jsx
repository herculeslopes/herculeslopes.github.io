import './App.css'

import { Navigate, BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
// import Slug from './Pages/Slug'
import SharedLayout from './Layouts/SharedLayout'
import Roadmap from './Pages/Roadmap'
import Scrollbars from 'react-custom-scrollbars'

import SISMOB from './Content/SISMOB.mdx'
import CGeo from './Content/CGeo.mdx'

function App() {

  return <>
    <Scrollbars style={{ height: '100vh' }}>
      <HashRouter>
        <Routes>
          <Route path='' element={<SharedLayout />}>
            <Route index element={<Navigate to='home' />} />
            {/* <Route index element={<Home />} /> */}
            <Route path='home' element={<Home />} />

            <Route path='roadmap' element={<Roadmap />} />

            {/* Projects */}
            <Route path='sismob' element={<SISMOB />} />
            <Route path='cgeo' element={<CGeo />} />

            {/* <Route path='projects'>
              <Route path=':slug' element={<Slug />} />
            </Route> */}

          </Route>
        </Routes>
      </HashRouter>
    </Scrollbars>
  </>
}

export default App
