import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'

function App() {
  

  return (
    <>
      <Routes>

        
        <Route path="/" element={<Layout />} >
        <Route path='/' element={<Home/>} />
        </Route>

      </Routes>
    </>
  )
}

export default App
