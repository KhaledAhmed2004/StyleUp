
import Product from '@/components/Product';
import ProductDitels from '@/components/ProductDetails';
import Footer from '@/components/shared/FooterWithNewsletter';
import Header from '@/components/shared/Header';
import SimilarProducts from '@/components/SimilarProducts';

const ProductDetails = () => {
  return (
    <div>
      <Header />
      <Product />
      <ProductDitels />
      <SimilarProducts />
      <Footer />
    </div>
  );
};

export default ProductDetails;
