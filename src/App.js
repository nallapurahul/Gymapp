import React from 'react'
import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import {Box} from '@mui/material'

const App = () => {
  return (
    <Box width="400px" sx={{width:{x1:'1488px'}}} m="auto" >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
      </Routes>
   </Box>
  )
}

export default App
