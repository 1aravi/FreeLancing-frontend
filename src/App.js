import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Myprofile from './Myprofile';
import Addproject from './Addproject';
import Applyproject from './applyproject';
import Viewprojects from './viewprojects';
import Viewapplicants from './viewapplicants';


const App = () => {

  
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/myprofile' element={<Myprofile />}/>
        <Route path='/addproject' element={<Addproject />}/>
        <Route path='/applyproject' element={<Applyproject />}/>
        <Route path='/viewprojects' element={<Viewprojects />}/>
        <Route path ='/viewapplicants' element={<Viewapplicants />}/>
        
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App

