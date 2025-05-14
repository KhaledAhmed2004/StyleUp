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

interface Order {
  _id: string; // Changed to match the data structure
  image: string;
  customerName: string; // Changed from 'name' to 'customerName'
  date: string;
  totalPrice: number;
  status: string;
}

const Order = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    fetch('/ordersData.json')
      .then((res) => res.json())
      .then((data: Order[]) => {
        setOrders(data); // Populate the state with the fetched data
      })
      .catch((err) => console.error('Failed to load orders:', err));
  }, []);

  return (
    <div className="rounded-[8px] border bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b px-10 py-6">
        <h2 className="text-lg font-semibold">Orders</h2>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search
              className="absolute top-1/2 left-3 -translate-y-1/2"
              size={16}
            />
            <Input type="text" placeholder="Search orders" className="pl-9" />
          </div>
        </div>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {orders.map((order) => (
            <TableRow key={order._id}>
              {' '}
              {/* Use _id as the key */}
              <TableCell className="flex items-center gap-3 font-medium">
                <div className="h-12 w-12 overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={order.image}
                    alt={order.customerName} // Updated to 'customerName'
                    className="h-full w-full object-cover"
                  />
                </div>
                {order.customerName} {/* Updated to 'customerName' */}
              </TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell className="text-right">
                ${order.totalPrice.toFixed(2)}
              </TableCell>
              <TableCell>
                <span
                  className={`rounded-full px-2 py-1 text-xs font-semibold ${
                    order.status === 'Delivered'
                      ? 'bg-green-100 text-green-700'
                      : order.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                  }`}
                >
                  {order.status}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-center">
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

export default Order;
