import './App.css'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import { Home } from './Components/Home'
import { Login } from './Components/Login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserStorage } from './UserContext'
import { Api } from './api/Api'
import { User } from './Components/User/User'

function App() {

  return (
    <BrowserRouter>
      <UserStorage>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login/*" element={<Login/>} />
          <Route path="/rota/*" element={<User/>} />
        </Routes>
        <Footer/>
      </UserStorage>
    </BrowserRouter>
  )
}

export default App
