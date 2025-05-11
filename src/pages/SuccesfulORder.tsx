import OrderDetails from '@/components/OrderDetails';
import OrderSummarny from '@/components/OrderSummarny';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import ShipingAddress from '@/components/ShipingAddress';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import YourCart from '@/components/YourCart';

const SuccesfulORder = () => {
  return (
    <div>
      <Header />
      <div className="items-center bg-neutral-white-w100">
        <div className="mx-auto h-[160px] max-w-7xl py-[40px]">
          <h2>Cart</h2>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Ecommerce</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Cart</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div
          data-property-1="Success"
          className="inline-flex flex-col items-start justify-start gap-2.5 overflow-hidden px-2 py-5"
        >
          <div className="relative h-32 w-36">
            <div className="absolute top-0 left-0 h-32 w-36 bg-gray-900" />
            <div className="absolute top-[72.55px] left-[105.05px] h-5 w-6 bg-neutral-500" />
          </div>
        </div>
        <div className="justify-start text-center font-['Inter'] text-2xl font-bold text-gray-900">
          Thank you for shopping
        </div>
        <div className="w-96 justify-start text-center font-['Inter'] text-sm leading-normal font-normal text-gray-600">
          Your order has been successfully placed and is now being processed.
        </div>
        <Button>Go To My Account</Button>
      </div>
      <Footer />
    </div>
  );
};

export default SuccesfulORder;
 