import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Listing from './pages/Listing';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import SuccesfulORder from './pages/SuccessfulOrder';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import ForgotPassowrd from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import Orer from './pages/profile/Order';
import ProfileLayout from './layouts/ProfileLayout';
import AccoutDetaijls from './pages/profile/AccountDetails';
import Password from './pages/profile/Password';
import Address from './pages/profile/Address';
import Wishlist from './pages/profile/Wishlist';

function App() {
  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route index element={<Home />} />
        <Route path="product-details" element={<ProductDetails />} />
        <Route path="listing" element={<Listing />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="succesful-order" element={<SuccesfulORder />} />

        {/* Authentication routes */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPassowrd />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>

        {/* Profile (protected) routes */}
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
