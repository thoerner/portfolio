import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'

function App() {

  const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )

  return (
    <div className="App">
      <Router>
        {routes}
      </Router>
    </div>
  )
}

export default App
