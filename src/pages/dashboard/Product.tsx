import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Ellipsis, Search } from 'lucide-react';
import { Link } from 'react-router';

interface Product {
  _id: string;
  sku: string; // Add the sku field
  image: string;
  title: string;
  price: number;
  availableQuantity: number;
  categories: string[];
}

const Product = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/productsData.json')
      .then((res) => res.json())
      .then((data: Product[]) => {
        setProducts(data);
      })
      .catch((err) => console.error('Failed to load products:', err));
  }, []);

  return (
    <div className="rounded-[8px] border bg-neutral-white-w900">
      {/* Header */}
      <div className="flex items-center justify-between border-b px-10 py-6">
        <h2 className="text-lg font-semibold">Products</h2>
        <div className="flex items-center gap-4">
          <Link
            to="/dashboard/add-product"
            className="rounded bg-black px-4 py-2 text-white hover:bg-gray-800"
          >
            Add product
          </Link>
          <div className="relative">
            <Search
              className="absolute top-1/2 left-3 -translate-y-1/2"
              size={16}
            />
            <Input type="text" placeholder="Search products" className="pl-9" />
          </div>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>SKU</TableHead> {/* Changed to SKU */}
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Stock</TableHead>
            <TableHead>Categories</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.map((product) => (
            <TableRow key={product._id}>
              <TableCell className="flex items-center gap-3 font-medium">
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-gray-200 p-1">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain"
                  />
                </div>
                <p>{product.title}</p>
              </TableCell>
              <TableCell>{product.sku}</TableCell> {/* Show SKU here */}
              <TableCell className="text-right">
                ${product.price.toFixed(2)}
              </TableCell>
              <TableCell className="text-right">
                {product.availableQuantity}
              </TableCell>
              <TableCell>{product.categories.join(', ')}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Ellipsis />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Product;
