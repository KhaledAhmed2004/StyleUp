import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

// 1. Define the Product type
type Product = {
  _id: string;
  image: string;
  title: string;
  price: number;
  inStock: boolean;
  isFeatured?: boolean;
};

const ProductList = () => {
  // 2. Declare the products state with type
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/productsData.json')
      .then((res) => res.json())
      .then((data: Product[]) => {
        // 3. Type `product` in filter
        const bestSellingProducts = data.filter(
          (product: Product) => product.isFeatured,
        );
        setProducts(bestSellingProducts);
      })
      .catch((err) => console.error('Failed to load products:', err));
  }, []);
  return (
    <section className="mx-auto mt-[152px] max-w-7xl">
      {/* catigories */}
      <div className="flex items-center justify-center gap-6">
        <div className="inline-block rounded-full border px-4 py-[3px]">
          <p className="text-sm font-medium text-gray-800">Featured</p>
        </div>
        <h4 className="text-sm font-normal text-gray-600">Latest</h4>
      </div>
      {/* product list */}
      <div className="mt-[48px] flex justify-between">
        {products.map((p) => (
          <ProductCard
            to={`/product-details/${p._id}`}
            key={p._id}
            imageSrc={p.image}
            title={p.title}
            price={p.price}
            inStock={p.inStock}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
