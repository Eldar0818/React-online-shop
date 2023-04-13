import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Navbar from './components/base/Navbar'
import Footer from './components/base/Footer'

const App = () => {
  return (
    <main className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products/>} />
      </Routes>
      <Footer/>
      <div className="copyright">
        <p>2023-2035 Web dev Eldar Yalkun Created, EDR_SHOP all rights reserved&copy;</p>
      </div>
    </main>
  )
}

export default App