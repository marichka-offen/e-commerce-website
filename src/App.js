import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navigation from './routes/Navigation'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
