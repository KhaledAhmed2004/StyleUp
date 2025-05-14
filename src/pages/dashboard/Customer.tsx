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

// Define customer type
interface Customer {
  id: string;
  name: string;
  email: string;
  shippingAddress: string;
  image: string;
}

const Customers = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    fetch('/customersData.json') // ensure this file contains your customer array
      .then((res) => res.json())
      .then((data: any[]) => {
        const mapped: Customer[] = data.map((cust) => ({
          id: cust._id,
          name: cust.name,
          email: cust.email,
          shippingAddress: cust.address,
          image: cust.profileImg,
        }));
        setCustomers(mapped);
      })
      .catch((err) => console.error('Failed to load customers:', err));
  }, []);

  return (
    <div className="rounded-[8px] border bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b px-10 py-6">
        <h2 className="text-lg font-semibold">Customers</h2>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search
              className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500"
              size={16}
            />
            <Input
              type="text"
              placeholder="Search customers"
              className="pl-9"
            />
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
                    alt={customer.name}
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
      </Table>
    </div>
  );
};

export default Customers;
