import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Tools from './pages/Tools'
import Apps from './pages/Apps'
import Mint from './pages/Mint'
import Services from './pages/Services'
import { Navbar } from './components'
import { Toaster } from 'react-hot-toast'
import './App.css'

function App() {

  const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/mint" element={<Mint />} />
      {/* <Route path="/apps" element={<Apps />} /> */}
      <Route path="/services" element={<Services />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )

  return (
    <div className="App">
      <Toaster />
      <Navbar />
      {routes}
    </div>
  )
}

export default App
