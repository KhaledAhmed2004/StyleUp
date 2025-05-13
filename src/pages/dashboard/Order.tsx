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

// sample order data
const orders = [
  {
    id: 'ORD-001',
    customerName: 'John Doe',
    date: '2025-05-10',
    total: 250.0,
    status: 'Completed',
    image: img,
  },
  {
    id: 'ORD-002',
    customerName: 'Jane Smith',
    date: '2025-05-09',
    total: 150.0,
    status: 'Pending',
    image: img,
  },
  {
    id: 'ORD-003',
    customerName: 'Michael Johnson',
    date: '2025-05-08',
    total: 350.0,
    status: 'Cancelled',
    image: img,
  },
  {
    id: 'ORD-004',
    customerName: 'Emily Brown',
    date: '2025-05-07',
    total: 450.0,
    status: 'Completed',
    image: img,
  },
  {
    id: 'ORD-005',
    customerName: 'Daniel Wilson',
    date: '2025-05-06',
    total: 550.0,
    status: 'Pending',
    image: img,
  },
];

const Order = () => {
  // calculate total sales
  const totalSales = orders
    .reduce((sum, order) => sum + order.total, 0)
    .toFixed(2);

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
            <TableHead>Customer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="flex items-center gap-3 font-medium">
                <div className="h-12 w-12 overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={order.image}
                    alt="Customer"
                    className="h-full w-full object-cover"
                  />
                </div>
                {order.customerName}
              </TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell className="text-right">
                ${order.total.toFixed(2)}
              </TableCell>
              <TableCell>
                <span
                  className={`rounded-full px-2 py-1 text-xs font-semibold ${
                    order.status === 'Completed'
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

        <TableFooter>
          <TableRow>
            <TableCell colSpan={2} className="font-semibold">
              Total Sales
            </TableCell>
            <TableCell className="text-right font-semibold">
              ${totalSales}
            </TableCell>
            <TableCell colSpan={2} />
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default Order;
