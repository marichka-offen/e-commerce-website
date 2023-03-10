import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Authentication from './pages/Authentication/Authentication'
import Navigation from './routes/Navigation'
import Shop from './pages/Shop/Shop'
import Cart from './pages/Cart/Cart'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='/' element={<Home />} />
        <Route path='/shop/*' element={<Shop />} />
        <Route path='/auth' element={<Authentication />} />
        <Route path='/cart' element={<Cart />} />
      </Route>
    </Routes>
  )
}

export default App
