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

// Define review type
type Review = {
  reviewer: string;
  text: string;
  profileImage: string;
  date: string;
};

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch('/productsData.json')
      .then((res) => res.json())
      .then((data) => {
        const allReviews: Review[] = data.flatMap((product: any) =>
          product.reviews.map((review: any) => ({
            ...review,
          })),
        );
        setReviews(allReviews);
      })
      .catch((err) => console.error('Failed to load reviews:', err));
  }, []);

  return (
    <div className="rounded-[8px] border bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b px-10 py-6">
        <h2 className="text-lg font-semibold">Reviews</h2>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search
              className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500"
              size={16}
            />
            <Input type="text" placeholder="Search reviews" className="pl-9" />
          </div>
        </div>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Review</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {reviews.map((review, index) => (
            <TableRow key={index}>
              <TableCell className="flex items-center gap-3 font-medium">
                <div className="h-12 w-12 overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={review.profileImage}
                    alt={review.reviewer}
                    className="h-full w-full object-cover"
                  />
                </div>
                {review.reviewer}
              </TableCell>
              <TableCell>{review.text}</TableCell>
              <TableCell>{review.date}</TableCell>
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

export default Reviews;
