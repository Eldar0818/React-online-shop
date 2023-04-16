import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Navbar from './components/base/Navbar'
import Footer from './components/base/Footer'
import ProductPage from './pages/ProductPage'
import ScrollToTop from './components/helper/ScrollToTop'
import Cart from './pages/Cart'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import CustomerPage from './pages/CustomerPage'

const App = () => {
  return (
    <main className='App'>
      <ScrollToTop />
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products pathname="All"/>} />
        <Route path='/products/T-shirts' element={<Products pathname="T-shirts"/>} />
        <Route path='/products/Dresses' element={<Products pathname="Dresses"/>} />
        <Route path='/products/Jackets' element={<Products pathname="Jackets"/>} />
        <Route path='/product/:id' element={<ProductPage/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/customer' element={<CustomerPage/>} />
      </Routes>
      <Footer/>
      <div className="copyright">
        <p>2023-2035 Web dev Eldar Yalkun Created, EDR_SHOP all rights reserved&copy;</p>
      </div>
    </main>
  )
}

export default App