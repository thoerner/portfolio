import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Tools from './pages/Tools'
import { Navbar } from './components'
import { Toaster } from 'react-hot-toast'
import './App.css'

function App() {

  const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )

  return (
    <div className="App">
      <Toaster />
      <Navbar />
      <Router>
        {routes}
      </Router>
    </div>
  )
}

export default App
