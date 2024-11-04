import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home/Home'
import Cart from './pages/cart/Cart'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App
