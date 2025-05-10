import NewsLatter from '@/components/NewsLatter';
import Product from '@/components/Product';
import ProductDitels from '@/components/ProductDitels';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import SimilarProducts from '@/components/SimilarProducts';

const ProductDetails = () => {
  return (
    <div>
      <Header />
      <Product />
      <ProductDitels />
      <SimilarProducts />
      <NewsLatter />
      <Footer />
    </div>
  );
};

export default ProductDetails;
