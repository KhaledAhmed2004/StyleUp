import img1 from '../assets/cover.svg';
import img2 from '../assets/cover (1).svg';
import img3 from '../assets/cover (2).svg';
import img4 from '../assets/cover (3).svg';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    image: img1,
    title: 'Classic Monochrome Tees',
    price: 35,
    inStock: true,
  },
  {
    id: 2,
    image: img2,
    title: 'Monochromatic Wardrobe',
    price: 27,
    inStock: true,
  },
  { id: 3, image: img3, title: 'Essential Neutrals', price: 22, inStock: true },
  { id: 4, image: img4, title: 'UTRAANET Black', price: 43, inStock: true },
];

const SimilarProducts = () => {
  return (
    <section className="mx-auto max-w-7xl">
      <div className="mb-[56px]">
        <h2 className="text-2xl font-bold">You might also like</h2>
        <p>SIMILAR PRODUCTS</p>
      </div>
      {/* product list */}
      <div className="mt-[48px] flex justify-between">
        {products.map((p) => (
          <ProductCard
            key={p.id}
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

export default SimilarProducts;
