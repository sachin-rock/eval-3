import { useState } from 'react'
import logo from './logo.svg'
import './App.css';
import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { EmployeeList} from './components/EmployeeList';
import { EmployeeDetails } from './components/EmployeeDetails';
import { Admin } from './components/Admin';
import { Login } from './components/Login';


function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/employeeList' element={<EmployeeList/>}></Route>
        <Route path='/employeeDetails' element={<EmployeeDetails/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
  )
}

export default App
