import { Ribbon, ShieldCheck, Truck } from 'lucide-react';

const FeaturesCard = () => {
  return (
    <section className="mx-auto mt-[88px] mb-[48px] flex max-w-7xl justify-between">
      <div className="h-[218px] w-[328px]">
        <div className="mb-[24px] flex h-[48px] w-[48px] items-center justify-center rounded-full bg-neutral-white-w100 p-[5px]">
          <Truck />
        </div>
        <h5 className="mb-[12px] text-[16px] font-semibold">Free Shipping</h5>
        <p className="w-[272px]">
          Upgrade your style today and get FREE shipping on all orders! Don't
          miss out.
        </p>
      </div>
      <div className="h-[218px] w-[328px]">
        <div className="mb-[24px] flex h-[48px] w-[48px] items-center justify-center rounded-full bg-neutral-white-w100 p-[5px]">
          <Ribbon />
        </div>
        <h5 className="mb-[12px] text-[16px] font-semibold">
          Satisfaction Guarantee
        </h5>
        <p className="w-[272px]">
          Shop confidently with our Satisfaction Guarantee: Love it or get a
          refund.
        </p>
      </div>
      <div className="h-[218px] w-[328px]">
        <div className="mb-[24px] flex h-[48px] w-[48px] items-center justify-center rounded-full bg-neutral-white-w100 p-[5px]">
          <ShieldCheck />
        </div>
        <h5 className="mb-[12px] text-[16px] font-semibold">Secure Payment</h5>
        <p className="w-[272px]">
          Your security is our priority. Your payments are secure with us.
        </p>
      </div>
    </section>
  );
};

export default FeaturesCard;
