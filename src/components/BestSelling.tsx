import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

// 1. Define the Product type
type Product = {
  _id: string;
  image: string;
  title: string;
  price: number;
  inStock: boolean;
  isBestSelling?: boolean;
};

const BestSelling = () => {
  // 2. Declare the products state with type
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/productsData.json')
      .then((res) => res.json())
      .then((data: Product[]) => {
        // 3. Type `product` in filter
        const bestSellingProducts = data.filter(
          (product: Product) => product.isBestSelling,
        );
        setProducts(bestSellingProducts);
      })
      .catch((err) => console.error('Failed to load products:', err));
  }, []);

  return (
    <section className="mx-auto mt-[72px] max-w-7xl">
      <div className="mb-[80px] flex justify-center">
        <div className="text-start">
          <p className="label-loose-medium-uppercase text-neutral-black-b300">
            Shop Now
          </p>
          <h3 className="mt-2 heading-h3-normal-bold">Best Selling</h3>
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-6">
        {products.map((p) => (
          <ProductCard
            key={p._id}
            to={`/product-details/${p._id}`}
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

export default BestSelling;
