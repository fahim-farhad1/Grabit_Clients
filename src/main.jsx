import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './Layouts/MainLayout'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
    <Route element={<MainLayout />}>
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='about' element={<About />} />
    <Route path='about' element={<About />} />
    <Route path='about' element={<About />} />
    </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>
)
