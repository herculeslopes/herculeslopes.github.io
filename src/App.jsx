import './App.css'

import { Navigate, BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
// import Slug from './Pages/Slug'
import SharedLayout from './Layouts/SharedLayout'
import ContentLayout from './Layouts/ContentLayout'

import Roadmap from './Pages/Roadmap'
import Scrollbars from 'react-custom-scrollbars'

import SISMOB from './Content/SISMOB.mdx'
import CGeo from './Content/CGeo.mdx'

import Art1 from './Art/Art-1';
import Art2 from './Art/Art-2';
import Art3 from './Art/Art-3';
import ArtLayout from './Layouts/ArtLayout'

function App() {

  return <>
    <Scrollbars style={{ height: '100vh' }}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Navigate to='home' />} />
            {/* <Route index element={<Home />} /> */}
            <Route path='home' element={<Home />} />

            <Route path='roadmap' element={<Roadmap />} />

            {/* Projects */}
            <Route element={<ContentLayout />} >
              <Route path='sismob' element={<SISMOB />} />
              <Route path='cgeo' element={<CGeo />} />
            </Route>

            <Route path='css-art' element={<ArtLayout />}>
              <Route path='art-1' element={<Art1 />} />
              <Route path='art-2' element={<Art2 />} />
              <Route path='art-3' element={<Art3 />} />
            </Route>

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
