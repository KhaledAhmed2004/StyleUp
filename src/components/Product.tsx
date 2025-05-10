import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Badge } from './ui/badge';
import { Star } from 'lucide-react';
import { Button } from './ui/button';
import img from '../assets/Product image.svg';
const Product = () => {
  return (
    <section className="mx-auto max-w-7xl">
      <Breadcrumb className="mt-[16px]">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Ecommerce</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink className="text-black" href="/components">
              Black man t-shirt
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-[16px] flex gap-[120px]">
        <div className="h-[574px] w-[534px] rounded-[5px] bg-neutral-white-w100">
          <img src={img} alt="" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Raw Black T-Shirt Lineup</h2>
          <div className="mt-3.5 flex gap-2">
            <Badge variant="secondary" className="flex gap-2 px-[16px]">
              <Star /> 4.2 — 54 Reviews
            </Badge>
            <Badge variant="outline" className="px-[16px]">
              IN STOCK
            </Badge>
          </div>
          <h3 className="mt-[24px] text-[18px] font-semibold">$75.00</h3>
          <div className="mt-[32px]">
            <h2 className="text-[12px] font-medium">AVAILABLE COLORS</h2>
            <div className="inline-flex items-center justify-center gap-2.5">
              <div
                data-state="Selected"
                className="flex h-8 w-8 items-center justify-center gap-2 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-gray-900"
              >
                <div className="h-6 w-6 rounded-[100px] bg-indigo-300" />
              </div>
              <div
                data-state="Default"
                className="flex h-8 w-8 items-center justify-center gap-2 rounded-[100px]"
              >
                <div className="h-6 w-6 rounded-[100px] bg-amber-200" />
              </div>
              <div
                data-state="Default"
                className="flex h-8 w-8 items-center justify-center gap-2 rounded-[100px]"
              >
                <div className="h-6 w-6 rounded-[100px] bg-neutral-400" />
              </div>
            </div>
          </div>
          <div className="relative mt-[16px] h-20 w-60">
            <div className="absolute top-[34px] left-0 inline-flex items-end justify-start gap-2">
              <div
                data-state="Selected"
                className="inline-flex h-10 min-w-10 flex-col items-center justify-center overflow-hidden rounded outline outline-1 outline-offset-[-1px] outline-gray-900"
              >
                <div className="justify-start text-center font-['Inter'] text-xs leading-normal font-medium text-gray-900 capitalize">
                  S
                </div>
              </div>
              <div
                data-state="Default"
                className="inline-flex h-10 min-w-10 flex-col items-center justify-center overflow-hidden rounded outline outline-1 outline-offset-[-1px] outline-gray-200"
              >
                <div className="justify-start text-center font-['Inter'] text-xs leading-normal font-medium text-gray-600 capitalize">
                  M
                </div>
              </div>
              <div
                data-state="Default"
                className="inline-flex h-10 min-w-10 flex-col items-center justify-center overflow-hidden rounded outline outline-1 outline-offset-[-1px] outline-gray-200"
              >
                <div className="justify-start text-center font-['Inter'] text-xs leading-normal font-medium text-gray-600 capitalize">
                  X
                </div>
              </div>
              <div
                data-state="Default"
                className="inline-flex h-10 min-w-10 flex-col items-center justify-center overflow-hidden rounded outline outline-1 outline-offset-[-1px] outline-gray-200"
              >
                <div className="justify-start text-center font-['Inter'] text-xs leading-normal font-medium text-gray-600 capitalize">
                  XL
                </div>
              </div>
              <div
                data-state="Default"
                className="inline-flex h-10 min-w-10 flex-col items-center justify-center overflow-hidden rounded outline outline-1 outline-offset-[-1px] outline-gray-200"
              >
                <div className="justify-start text-center font-['Inter'] text-xs leading-normal font-medium text-gray-600 capitalize">
                  XXL
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0 justify-start text-center font-['Inter'] text-xs leading-normal font-medium tracking-wide text-gray-600 uppercase">
              Select Size
            </div>
          </div>
          <div className="relative mt-[34px] h-20 w-40">
            <div
              data-size="Default"
              className="absolute top-[34px] left-0 inline-flex h-11 w-40 min-w-10 items-center justify-between overflow-hidden rounded px-4 outline outline-1 outline-offset-[-1px] outline-gray-200"
            >
              <div className="relative h-5 w-5 overflow-hidden">
                <div className="absolute top-[10px] left-[4.17px] h-0 w-2.5 outline outline-[1.70px] outline-offset-[-0.85px] outline-gray-600" />
              </div>
              <div className="justify-start text-center font-['Inter'] text-sm leading-normal font-medium text-gray-800">
                1
              </div>
              <div className="relative h-5 w-5 overflow-hidden">
                <div className="absolute top-[5px] left-[10px] h-2.5 w-0 outline outline-[1.70px] outline-offset-[-0.85px] outline-gray-600" />
                <div className="absolute top-[10px] left-[5px] h-0 w-2.5 outline outline-[1.70px] outline-offset-[-0.85px] outline-gray-600" />
              </div>
            </div>
            <div className="absolute top-0 left-0 justify-start text-center font-['Inter'] text-xs leading-normal font-medium tracking-wide text-gray-600 uppercase">
              Quantity
            </div>
          </div>
          <Button variant={'default'}>ADD To Cart</Button>
          <p>— Free shipping on orders $100+</p>
        </div>
      </div>
    </section>
  );
};

export default Product;
