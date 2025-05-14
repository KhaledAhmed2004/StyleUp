import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Product from '@/components/Product';
import SimilarProducts from '@/components/SimilarProducts';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import ProductInfoSection from '@/components/ProductInfoSection';

type Review = {
  reviewer: string;
  profileImage: string;
  text: string;
  date: string;
};

type ProductType = {
  _id: string;
  title: string;
  price: number;
  image: string;
  rating: number;
  review: number;
  inStock: boolean;
  availableQuantity: number;
  colors: string[];
  sizes: string[];
  description: string; // you can add this
  details: string;
  reviews: Review[];
};

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    fetch('/productsData.json')
      .then((res) => res.json())
      .then((data: ProductType[]) => {
        const found = data.find((item) => item._id === id);
        if (found) {
          setProduct(found);
        }
      })
      .catch((err) => {
        console.error('Error loading product:', err);
      });
  }, [id]);

  if (!product) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="mx-auto max-w-7xl px-4">
      {/* Breadcrumb */}
      <Breadcrumb className="mt-[16px]">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Ecommerce</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink className="text-black" href="#">
              {product.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Product Preview Section */}
      <Product product={product} />

      {/* Product Details Section */}
      <ProductInfoSection
        title={product.title}
        description={`Price: $${product.price} | Rating: ${product.rating}/5`}
        details={product.details}
        reviews={product.reviews}
      />

      {/* Similar Products */}
      <SimilarProducts />
    </div>
  );
};

export default ProductDetailsPage;
