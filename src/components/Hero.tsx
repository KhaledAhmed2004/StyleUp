import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import heroImg from '../assets/HeroImage.svg';
import starImg from '../assets/Burst-pucker.svg';
const Hero = () => {
  return (
    <section className="h-[440px] bg-neutral-white-w100">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between">
        <div className="w-1/2">
          <div className="mb-[48px] space-y-[12px]">
            <h2 className="text-[32px] font-semibold">Fresh Arrivals Online</h2>
            <p>Discover Our Newest Collection Today.</p>
          </div>
          <Button
            variant="default"
            className="flex items-center justify-center gap-[6px] !px-[24px] !py-[12px]"
          >
            View Collection <ArrowRight />
          </Button>
        </div>

        <div className="relative h-full w-1/2">
          {/* Star image */}
          <img
            src={starImg}
            alt="Star"
            className="absolute top-14 left-68 h-12 w-12 object-cover"
          />

          {/* Gray Circle */}
          <div className="absolute top-1/2 right-10 flex h-80 w-80 -translate-y-1/2 items-center justify-center rounded-full bg-gray-200 opacity-60" />

          {/* Hero image */}
          <img
            src={heroImg}
            alt="Hero"
            className="absolute right-15 bottom-0 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
