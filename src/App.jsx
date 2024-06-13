import { Route, Routes } from 'react-router-dom'
import './scss/style.scss'

// Pages
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'

// Components
import SupHeader from "./components/topNavbar/TopNavbar"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
      <SupHeader />
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App