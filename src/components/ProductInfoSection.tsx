
import { Ellipsis, Star } from 'lucide-react';
import { Button } from './ui/button';

interface Review {
  reviewer: string;
  profileImage: string;
  text: string;
  date: string;
}

interface ProductInfoProps {
  title: string;
  description: string;
  details: string;
  reviews: Review[];
}

const ProductInfoSection = ({ title, description, details, reviews }: ProductInfoProps) => {
  return (
    <section className="mx-auto mt-[176px] mb-[176px] flex max-w-7xl gap-[32px]">
      <div className="flex flex-col gap-[16px]">
        <Button className="w-[241px] gap-2.5 !px-[24px] !py-[8px]" variant={'secondary'}>
          <Ellipsis /> Details
        </Button>
        <Button className="w-[241px] gap-2.5 !px-[24px] !py-[8px]" variant={'ghost'}>
          <Star /> Reviews
        </Button>
      </div>
      <div>
        <h2 className="mb-[24px] text-xl font-semibold text-gray-800">{title}</h2>
        <p className="mb-[56px] leading-relaxed text-gray-700">{description}</p>
        <div className="mb-[24px] text-gray-700">
          <p className="font-semibold">Details:</p>
          <p>{details}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mt-8">Reviews</h3>
          {reviews.map((review, index) => (
            <div key={index} className="border-t pt-4">
              <div className="flex gap-4 mb-2">
                <img src={review.profileImage} alt={review.reviewer} className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-semibold">{review.reviewer}</p>
                  <p className="text-sm text-gray-600">{review.date}</p>
                </div>
              </div>
              <p className="text-gray-700">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductInfoSection;
