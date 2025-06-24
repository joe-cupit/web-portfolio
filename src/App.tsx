import './App.css'

import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router'

import Projects from './pages/Projects'
import CV from './pages/CV/CV'
import DotCursor from './components/DotCursor'


function App() {

  // update theme if one is stored in local storage
  document.querySelector('body')?.setAttribute('data-theme', (localStorage.getItem('theme') ?? "light"));


  // scroll to top when page changes, don't if back button is usesd
  const [lastPoppedPage, setLastPoppedPage] = useState(null);
  window.onpopstate = e => {
    setLastPoppedPage(e?.state?.key);
  }
  const { key } = useLocation();
  useEffect(() => {
    if (key !== lastPoppedPage) window.scrollTo(0, 0);
  }, [key]);


  return (
    <>
      <DotCursor />
      <Routes>
        <Route path='/' element={<CV />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
