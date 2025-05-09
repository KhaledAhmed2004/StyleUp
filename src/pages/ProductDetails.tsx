import NewsLatter from '@/components/NewsLatter';
import ProductDitels from '@/components/ProductDitels';
import Footer from '@/components/shared/Footer';
import SimilarProducts from '@/components/SimilarProducts';

const ProductDetails = () => {
  return (
    <div>
      <ProductDitels />
      <SimilarProducts />
      <NewsLatter />
      <Footer />
    </div>
  );
};

export default ProductDetails;
