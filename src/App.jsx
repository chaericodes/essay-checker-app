import { ReactDOM } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import './App.css'

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route index element={<Login />} />
      <Route path='SignUp' element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
