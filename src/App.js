import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import User from './Pages/User';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import MyProfile from './Components/UserAccount/MyProfile/MyProfile';
import Wishlist from './Components/UserAccount/Wishlist/Wishlist';
import ChangePassword from './Components/UserAccount/ChangePassword/ChangePassword';
import Checkout from './Components/CartItems/Checkout/Checkout';
// import women_banner from './Components/Assets/banner_women.png'
// import kid_banner from './Components/Assets/banner_kids.png'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category='men' />} />
          {/* <Route path='/womens' element={<ShopCategory banner={women_banner} category='women'/>}/> */}
          {/* <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kid'/>}/> */}
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/user-account" element={<User/>} />
          <Route path='/profile' element={<MyProfile/>} />
          <Route path='/wishlist' element={<Wishlist/>} />
          <Route path='/change-password' element={<ChangePassword/>} />
          
          

        </Routes>
        <Footer />


      </BrowserRouter>
    </div>
  );
}

export default App;
