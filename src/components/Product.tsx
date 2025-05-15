import { useState } from 'react';
import { Badge } from './ui/badge';
import { Star } from 'lucide-react';
import { Button } from './ui/button';

// Define type for a color option
interface ColorOption {
  name: string;
  value: string; // Tailwind-compatible inline style
}

// Updated product shape based on new data
type ProductType = {
  _id: string;
  title: string;
  price: number;
  image: string;
  rating: number;
  review: number;
  inStock: boolean;
  availableQuantity: number;
  colors: string[]; // Original array from API
  sizes: string[];
};

// Props
interface ProductProps {
  product: ProductType;
  onAddToCart?: (args: {
    productId: string;
    color: ColorOption;
    size: string;
    quantity: number;
  }) => void;
}

const Product = ({ product, onAddToCart }: ProductProps) => {
  // Convert hex colors to ColorOption objects
  const colorOptions: ColorOption[] = product.colors.map((hex) => ({
    name: hex,
    value: `bg-[${hex}]`, // Tailwind won't allow dynamic colors directly
  }));

  const [selectedColor, setSelectedColor] = useState<ColorOption>(
    colorOptions[0],
  );
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const [quantity, setQuantity] = useState<number>(1);

  const handleColorSelect = (color: ColorOption) => setSelectedColor(color);
  const handleSizeSelect = (size: string) => setSelectedSize(size);

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => {
      const next = prev + delta;
      if (next < 1) return 1;
      if (next > product.availableQuantity) return product.availableQuantity;
      return next;
    });
  };

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({
        productId: product._id,
        color: selectedColor,
        size: selectedSize,
        quantity,
      });
    }
  };

  return (
    <section className="mx-auto max-w-7xl">
      <div className="mt-4 flex flex-col lg:flex-row lg:gap-28">
        <div className="flex h-[574px] w-full items-center justify-center rounded-[5px] bg-neutral-white-w100 lg:w-[534px]">
          <img
            src={product.image}
            alt={product.title}
            className="h-full object-contain"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <div className="mt-3.5 flex gap-2">
            <Badge variant="secondary" className="flex gap-2 px-4">
              <Star /> {product.rating} — {product.review} Reviews
            </Badge>
            <Badge
              variant={product.inStock ? 'outline' : 'destructive'}
              className="px-4"
            >
              {product.inStock ? 'IN STOCK' : 'OUT OF STOCK'}
            </Badge>
          </div>
          <h3 className="mt-6 text-lg font-semibold">
            ${product.price.toFixed(2)}
          </h3>

          {/* Colors */}
          <div className="mt-8">
            <h4 className="text-xs font-medium uppercase">Available Colors</h4>
            <div className="mt-2 inline-flex items-center gap-2.5">
              {colorOptions.map((color) => (
                <button
                  key={color.name}
                  onClick={() => handleColorSelect(color)}
                  className={`flex h-8 w-8 items-center justify-center rounded-full outline-1 outline-offset-[-1px] ${
                    selectedColor.name === color.name
                      ? 'outline-gray-900'
                      : 'outline-transparent hover:outline-gray-400'
                  }`}
                >
                  <div
                    className="h-6 w-6 rounded-full"
                    style={{ backgroundColor: color.name }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="relative mt-6 h-20 w-full max-w-xs">
            <div className="absolute top-0 left-0 text-xs font-medium tracking-wide text-gray-600 uppercase">
              Select Size
            </div>
            <div className="absolute top-8 left-0 flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className={`inline-flex h-10 min-w-[2.5rem] items-center justify-center rounded px-2 outline-1 outline-offset-[-1px] ${
                    selectedSize === size
                      ? 'outline-gray-900'
                      : 'outline-gray-200'
                  }`}
                >
                  <span
                    className={`text-xs font-medium capitalize ${
                      selectedSize === size ? 'text-gray-900' : 'text-gray-600'
                    }`}
                  >
                    {size}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="relative mt-6 h-20 w-full max-w-sm">
            <div className="absolute top-0 left-0 text-xs font-medium tracking-wide text-gray-600 uppercase">
              Quantity (max {product.availableQuantity})
            </div>
            <div className="absolute top-8 left-0 flex h-11 w-full max-w-xs items-center justify-between rounded px-4 outline-1 outline-gray-200">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="text-xl font-bold"
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="text-sm font-medium">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="text-xl font-bold"
                disabled={quantity >= product.availableQuantity}
              >
                +
              </button>
            </div>
          </div>

          <Button
            variant="default"
            className="mt-6"
            onClick={handleAddToCart}
            disabled={!product.inStock || quantity < 1}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Product;
