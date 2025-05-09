import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import img from '../assets/CategoryImage.svg';

const CategoriesCTA = () => {
  return (
    <section className="mt-[161px] flex h-[304px] bg-neutral-white-w100">
      {/* Inner container centered with max width */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 px-4 sm:px-6 md:flex-row">
        {/* Text Content */}
        <div className="">
          {/* Title */}
          <h2 className="mb-[24px] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Browse Our Fashion Paradise!
          </h2>

          {/* Description */}
          <p className="mb-[32px] w-[462px] text-[14px] leading-relaxed text-gray-500 sm:text-lg dark:text-gray-400">
            Step into a world of style and explore our diverse collection of
            clothing categories.
          </p>

          {/* Button */}
          <Button
            variant="default"
            size="lg"
            className="flex items-center gap-[6px] bg-black !px-[24px] text-white transition-colors duration-200 hover:bg-gray-800"
          >
            Start Browsing
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Image Content */}
        <div className="flex h-full w-full justify-end md:w-1/2">
          <img
            src={img}
            alt="Fashion Item"
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CategoriesCTA;
