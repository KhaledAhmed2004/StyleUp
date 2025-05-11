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
      </Routes>
    </>
  );
}

export default App;
