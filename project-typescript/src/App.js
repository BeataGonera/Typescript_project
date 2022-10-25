import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { Home } from './Components/Home/Home'
import { Login } from './Components/Login/Login'
import { Nav } from './Components/Nav/Nav'

function App() {
  
  return (
    
    <Router>
        <div className="App">
          <Nav/>
        <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<Login />} path='/login'/>
        </Routes>
        </div>
    </Router>
    

 

  );
}

export default App;
