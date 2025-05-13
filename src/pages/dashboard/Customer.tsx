
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
import img from '../../assets/blackTeshart.png';

// sample customer data
const customers = [
  {
    id: 'CUST-001',
    name: 'John Doe',
    email: 'john.doe@example.com',
    shippingAddress: '123 Main St, New York, NY',
    image: img,
  },
  {
    id: 'CUST-002',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    shippingAddress: '456 Elm St, Los Angeles, CA',
    image: img,
  },
  {
    id: 'CUST-003',
    name: 'Michael Johnson',
    email: 'michael.johnson@example.com',
    shippingAddress: '789 Oak St, Chicago, IL',
    image: img,
  },
  {
    id: 'CUST-004',
    name: 'Emily Brown',
    email: 'emily.brown@example.com',
    shippingAddress: '101 Pine St, Houston, TX',
    image: img,
  },
  {
    id: 'CUST-005',
    name: 'Daniel Wilson',
    email: 'daniel.wilson@example.com',
    shippingAddress: '202 Maple St, Miami, FL',
    image: img,
  },
];

const Customer = () => {
  return (
    <div className="rounded-[8px] border bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b px-10 py-6">
        <h2 className="text-lg font-semibold">Customers</h2>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search
              className="absolute top-1/2 left-3 -translate-y-1/2"
              size={16}
            />
            <Input type="text" placeholder="Search customers" className="pl-9" />
          </div>
        </div>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Shipping Address</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell className="flex items-center gap-3 font-medium">
                <div className="h-12 w-12 overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={customer.image}
                    alt="Customer"
                    className="h-full w-full object-cover"
                  />
                </div>
                {customer.name}
              </TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.shippingAddress}</TableCell>
              <TableCell>
                <div className="flex items-center justify-center">
                  <Ellipsis />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        {/* No footer needed for customers */}
      </Table>
    </div>
  );
};

export default Customer;
