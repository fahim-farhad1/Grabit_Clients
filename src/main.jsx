import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './Layouts/MainLayout'
import Home from './Pages/Home/Home'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
    <Route element={<MainLayout />}>
    <Route index element={<Home />} />
    </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>
)
