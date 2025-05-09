import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="product-details" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
