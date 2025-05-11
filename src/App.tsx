import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Listing from './pages/Listing';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import SuccesfulORder from './pages/SuccesfulORder';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassowrd from './pages/ForgotPassowrd';
import ResetPassword from './pages/ResetPassword';
import Orer from './pages/Orer';
import ProfileLayout from './layouts/ProfileLayout';
import AccoutDetaijls from './pages/AccoutDetaijls';
import Password from './pages/Password';
import Address from './pages/Address';
import Wishlist from './pages/Wishlist';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="product-details" element={<ProductDetails />} />
        <Route path="listing" element={<Listing />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="succesful-order" element={<SuccesfulORder />} />
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPassowrd />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>
        <Route path="/profile" element={<ProfileLayout />}>
          <Route path="orders" element={<Orer />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="address" element={<Address />} />
          <Route path="password" element={<Password />} />
          <Route path="details" element={<AccoutDetaijls />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
