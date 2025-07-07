import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home, Leads, Login, Profile, Registration } from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/" element={<Login />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/cadastro" element={<Registration />} />
      </Routes>
    </Router>
  )
}

export default App
