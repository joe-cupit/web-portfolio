import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import CV from './pages/CV/CV'
import DotCursor from './components/DotCursor'


function App() {

  return (
    <BrowserRouter>
      {/* <Navbar /> */}

      <DotCursor />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/cv' element={<CV />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
