import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Homepage from './homepage/Homepage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
