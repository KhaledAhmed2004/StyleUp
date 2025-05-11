import OrderSummarny from '@/components/OrderSummary';
import Footer from '@/components/shared/FooterWithNewsletter';
import Header from '@/components/shared/Header';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import YourCart from '@/components/YourCart';

const Cart = () => {
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
      <div className="flex">
        <YourCart />
        <OrderSummarny />
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
