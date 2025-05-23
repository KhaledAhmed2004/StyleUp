import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router';

interface ProductCardProps {
  to: string;
  imageSrc: string;
  title: string;
  price: number;
  inStock: boolean;
}

const ProductCard = ({
  to,
  imageSrc,
  title,
  price,
  inStock,
}: ProductCardProps) => {
  return (
    <Link to={to} className="flex h-[434px] w-[264px] flex-col gap-4 px-2 py-6">
      {/* Image wrapper */}
      <div className="flex h-[321px] w-full items-center justify-center overflow-hidden rounded-sm bg-neutral-white-w100">
        <img
          src={imageSrc}
          alt={title}
          className="max-h-[80%] w-auto object-contain object-center"
        />
      </div>
      {/* Info */}
      <div className="flex flex-col gap-3">
        <h5 className="body-medium text-neutral-black-b900">{title}</h5>
        <div className="flex items-center gap-4">
          <Badge
            variant="outline"
            className={`label-loose-medium ${
              inStock
                ? 'border-green-500 text-green-600'
                : 'border-red-500 text-red-600'
            }`}
          >
            {inStock ? 'IN STOCK' : 'OUT OF STOCK'}
          </Badge>
          <p className="body-regular text-neutral-black-b600">
            ${price.toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
