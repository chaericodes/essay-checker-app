import { ReactDOM } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import OTPForm from './components/OTPNotif'
import TeachersInterface from './components/TeachersInterface'
import './App.css'

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route index element={<Login />} />
      <Route path='SignUp' element={<SignUp />} />
      <Route path='OTPForm' element={<OTPForm/>}></Route>
      <Route path='TeachersInterface' element={<TeachersInterface/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
