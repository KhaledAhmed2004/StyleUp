import { Ellipsis, Star } from 'lucide-react';
import { Button } from './ui/button';

const ProductDitels = () => {
  return (
    <section className="mx-auto mt-[176px] mb-[176px] flex max-w-7xl gap-[32px]">
      <div className="flex flex-col gap-[16px]">
        <Button
          className="w-[241px] gap-2.5 !px-[24px] !py-[8px]"
          variant={'secondary'}
        >
          <Ellipsis /> Details
        </Button>
        <Button
          className="w-[241px] gap-2.5 !px-[24px] !py-[8px]"
          variant={'ghost'}
        >
          <Star /> Reviews
        </Button>
      </div>
      <div>
        <h2 className="mb-[24px] text-xl font-semibold text-gray-800">
          Details
        </h2>
        <p className="mb-[56px] leading-relaxed text-gray-700">
          Elevate your everyday style with our Men's Black T-Shirts, the
          ultimate wardrobe essential for modern men. Crafted with meticulous
          attention to detail and designed for comfort, these versatile black
          tees are a must-have addition to your collection.
          <br /> The classic black color never goes out of style. Whether you're
          dressing up for a special occasion or keeping it casual, these black
          t-shirts are the perfect choice, effortlessly complementing any
          outfit.
        </p>
        <ul className="list-inside list-disc text-gray-700">
          <li className="mb-1">Premium Quality</li>
          <li className="mb-1">Versatile Wardrobe Staple</li>
          <li className="mb-1">Available in Various Sizes</li>
          <li>Tailored Fit</li>
        </ul>
      </div>
    </section>
  );
};

export default ProductDitels;
