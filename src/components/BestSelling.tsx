import img1 from '../assets/blackTeshart.png';
import img2 from '../assets/brownteshart.png';
import img3 from '../assets/whiteteshart.png';
import img4 from '../assets/blackwithtext.png';
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

const BestSelling = () => (
  <section className="mx-auto mt-[72px] max-w-7xl">
    <div className="mb-[80px] flex justify-center">
      <div className="text-start">
        <p className="label-loose-medium-uppercase text-neutral-black-b300">Shop Now</p>
        <h3 className="mt-2 heading-h3-normal-bold">Best Selling</h3>
      </div>
    </div>

    <div className="flex justify-between">
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

export default BestSelling;
