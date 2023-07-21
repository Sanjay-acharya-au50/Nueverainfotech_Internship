
import { Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Postjoblogin from './pages/Postjoblogin'
import Postjobreg from './pages/Postjonreg'

function App() {


  return (
<>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/findjoblogin' element={<Login/>} />
        <Route path='/findjobreg' element={<Register/>} />
        <Route path='/postjoblogin' element={<Postjoblogin/>} />
        <Route path='/postjobreg' element={<Postjobreg/>} />
        <Route path='/*' element={<Error/>} />
      </Routes>
</>
  )
}

export default App
