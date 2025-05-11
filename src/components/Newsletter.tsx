import { Button } from './ui/button';
import { Input } from './ui/input';

const NewsLatter = () => {
  return (
    <section className="mt-[176px] h-[200px] bg-neutral-white-w100">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-[59px]">
        <div>
          {/* Title */}
          <h2 className="mb-[24px] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Join Our Newsletter{' '}
          </h2>
          {/* Description */}
          <p className="text-[14px] leading-relaxed text-gray-500 sm:text-lg dark:text-gray-400">
            We love to surprise our subscribers with occasional gifts.
          </p>
        </div>

        <div>
          <div className="flex w-full items-center space-x-2">
            <Input
              className="w-[320px] px-[15px] py-[10px]"
              type="email"
              placeholder="Your email address"
            />
            <Button className="px-[24px] py-[12px] text-[12px]" type="submit">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLatter;
