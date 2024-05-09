import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Loginsignup from './Pages/Loginsignup';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer.jsx';
import men_banner from './Components/Assets/men_banner.jpg'
import women_banner from './Components/Assets/women_banner.jpg'
import kid_banner from './Components/Assets/kids_banner.jpg'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner= {men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner= {women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner= {kid_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}> 
        <Route path= ':productId' element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}/> 
        <Route path="/login" element={<Loginsignup/>}/> 
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
