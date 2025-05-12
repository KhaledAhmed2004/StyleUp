import { Ribbon, ShieldCheck, Truck } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description:
      "Upgrade your style today and get FREE shipping on all orders! Don't miss out.",
  },
  {
    icon: Ribbon,
    title: 'Satisfaction Guarantee',
    description:
      'Shop confidently with our Satisfaction Guarantee: Love it or get a refund.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Payment',
    description:
      'Your security is our priority. Your payments are secure with us.',
  },
];

const FeaturesCard = () => {
  return (
    <section className="mx-auto my-20 flex max-w-7xl flex-wrap justify-between gap-8 px-4">
      {features.map(({ icon: Icon, title, description }, index) => (
        <div key={index} className="flex h-[218px] w-[328px] flex-col">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-white-w100 p-1">
            <Icon className="h-6 w-6" />
          </div>
          <h5 className="mb-3 heading-h5-normal-semiBold">{title}</h5>
          <p className="w-[272px] body-regular text-neutral-black-b500">
            {description}
          </p>
        </div>
      ))}
    </section>
  );
};

export default FeaturesCard;
