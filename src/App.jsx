import './App.css'

import { Navigate, BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
// import Slug from './Pages/Slug'
import SharedLayout from './Layouts/SharedLayout'
import Roadmap from './Pages/Roadmap'
import Scrollbars from 'react-custom-scrollbars'

import SISMOB from './Content/SISMOB.mdx'

function App() {

  return <>
    <Scrollbars style={{ height: '100vh' }}>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<SharedLayout />}>
            <Route index element={<Navigate to='home' />} />
            {/* <Route index element={<Home />} /> */}
            <Route path='home' element={<Home />} />

            <Route path='roadmap' element={<Roadmap />} />

            <Route path='projects'>
              <Route path='sismob' element={<SISMOB />} />
              {/* <Route path=':slug' element={<Slug />} /> */}
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </Scrollbars>
  </>
}

export default App
