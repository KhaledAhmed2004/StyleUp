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
import Orer from './pages/profile/Orders';
import ProfileLayout from './layouts/ProfileLayout';
import AccoutDetaijls from './pages/profile/AccountDetails';
import Password from './pages/profile/Password';
import Address from './pages/profile/Address';
import Wishlist from './pages/profile/Wishlist';
import Dashboard from './pages/dashboard/Dashboard';
import Product from './pages/dashboard/Product';
import AddProduct from './pages/dashboard/AddProduct';
import Order from './pages/dashboard/Order';
import Settings from './pages/dashboard/Settings';
import Reviews from './pages/dashboard/Reviews';
import Customer from './pages/dashboard/Customer';
import DashboardLayout from './layouts/DashboardLayout';

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

        {/* Dashboard routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="product" element={<Product />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="orders" element={<Order />} />
          <Route path="customer" element={<Customer />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
