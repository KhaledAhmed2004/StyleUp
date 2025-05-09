import img1 from '../assets/cover.svg';
import img2 from '../assets/cover (1).svg';
import img3 from '../assets/cover (2).svg';
import img4 from '../assets/cover (3).svg';

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

const ProductCard = ({ imageSrc, title, price, inStock }) => (
  <div className="flex h-[434px] w-[264px] flex-col gap-4 px-2 py-6">
    {/* Image wrapper: fixed square area */}
    <div className="flex h-[321px] w-full items-center justify-center overflow-hidden rounded-sm bg-neutral-white-w100">
      {/* Force images to same max height and auto width */}
      <img
        src={imageSrc}
        alt={title}
        className="max-h-[80%] w-auto object-contain object-center"
      />
    </div>
    {/* Info */}
    <div className="flex flex-col gap-3">
      <h5 className="text-sm font-medium">{title}</h5>
      <div className="flex items-center gap-4">
        <span
          className={`rounded-full border px-4 py-1 text-xs font-medium ${
            inStock
              ? 'border-green-500 text-green-600'
              : 'border-red-500 text-red-600'
          }`}
        >
          {inStock ? 'IN STOCK' : 'OUT OF STOCK'}
        </span>
        <p className="font-semibold">${price.toFixed(2)}</p>
      </div>
    </div>
  </div>
);

const SimilarProducts = () => {
  return (
    <section className="max-w-7xl mx-auto">
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
