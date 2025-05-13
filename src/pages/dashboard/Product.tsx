
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Ellipsis, Search } from 'lucide-react';
import img from '../../assets/blackTeshart.png';
import { Link } from 'react-router';

// sample product data
const products = [
  {
    name: 'Car Model A',
    sku: 'CM-A-001',
    price: 250.0,
    stock: 12,
    categories: ['Sedan', 'Economy'],
    image: img,
  },
  {
    image: img,
    name: 'Car Model B',
    sku: 'CM-B-002',
    price: 150.0,
    stock: 5,
    categories: ['SUV'],
  },
  {
    image: img,
    name: 'Car Model C',
    sku: 'CM-C-003',
    price: 350.0,
    stock: 8,
    categories: ['Convertible', 'Luxury'],
  },
  {
    image: img,
    name: 'Car Model D',
    sku: 'CM-D-004',
    price: 450.0,
    stock: 3,
    categories: ['Truck'],
  },
  {
    image: img,
    name: 'Car Model E',
    sku: 'CM-E-005',
    price: 550.0,
    stock: 0,
    categories: ['Van', 'Family'],
  },
];

const Product = () => {
  // calculate total stock
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);

  // calculate total price
  const totalValue = products
    .reduce((sum, p) => sum + p.price * p.stock, 0)
    .toFixed(2);

  return (
    <div className="rounded-[8px] border bg-neutral-white-w900">
      {/* Header */}
      <div className="flex items-center justify-between border-b px-10 py-6">
        <h2 className="text-lg font-semibold">Products</h2>
        <div className="flex items-center gap-4">
          <Link to="/dashboard/add-product" className="bg-black text-white hover:bg-gray-800">
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
            <TableHead>SKU</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Stock</TableHead>
            <TableHead>Categories</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.map((product) => (
            <TableRow key={product.sku}>
              <TableCell className="flex items-center gap-3 font-medium">
                <div className="h-12 w-12 rounded-lg bg-gray-200">
                  <img src={product.image} alt="" />
                </div>{' '}
                {product.name}
              </TableCell>
              <TableCell>{product.sku}</TableCell>
              <TableCell className="text-right">
                ${product.price.toFixed(2)}
              </TableCell>
              <TableCell className="text-right">{product.stock}</TableCell>
              <TableCell>{product.categories.join(', ')}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Ellipsis />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{totalStock}</TableCell>
            <TableCell />
            <TableCell className="text-right">${totalValue}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default Product;
