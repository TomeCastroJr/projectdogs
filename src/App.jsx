import './App.css'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import { Home } from './Components/Home'
import { Login } from './Components/Login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login/*" element={<Login/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
