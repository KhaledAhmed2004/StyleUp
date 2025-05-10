import React from 'react';

const OrderDetails = () => {
  return (
    <div className="relative h-[504px] w-96 overflow-hidden">
      <div
        data-right-icon="false"
        data-size="Default"
        data-type="Default"
        className="absolute top-[404px] left-0 inline-flex h-11 w-96 items-center justify-center gap-1.5 overflow-hidden rounded bg-gray-900 px-6 py-3"
      >
        <div className="justify-start font-['Inter'] text-sm leading-normal font-medium text-white">
          Place Order
        </div>
      </div>
      <div className="absolute top-[355px] left-0 inline-flex w-96 items-center justify-between">
        <div className="justify-start font-['Inter'] text-sm leading-normal font-medium text-gray-900">
          Total
        </div>
        <div className="justify-start font-['Inter'] text-base font-medium text-gray-900">
          $ 78.00
        </div>
      </div>
      <div className="absolute top-[330px] left-0 h-px w-96 bg-gray-200" />
      <div className="absolute top-[281px] left-0 inline-flex w-96 items-center justify-between">
        <div className="justify-start font-['Inter'] text-sm leading-normal font-medium text-gray-600">
          Tax:{' '}
        </div>
        <div className="justify-start font-['Inter'] text-sm leading-normal font-medium text-gray-900">
          $ 3.00
        </div>
      </div>
      <div className="absolute top-[244px] left-0 inline-flex w-96 items-center justify-between">
        <div className="justify-start font-['Inter'] text-sm leading-normal font-medium text-gray-600">
          Shipping:{' '}
        </div>
        <div className="justify-start font-['Inter'] text-sm leading-normal font-medium text-gray-900">
          Free
        </div>
      </div>
      <div className="absolute top-[207px] left-0 inline-flex w-96 items-center justify-between">
        <div className="justify-start font-['Inter'] text-sm leading-normal font-medium text-gray-600">
          Subtotal:
        </div>
        <div className="justify-start font-['Inter'] text-sm leading-normal font-medium text-gray-900">
          $ 75.00
        </div>
      </div>
      <div className="absolute top-[99px] left-0 inline-flex w-96 items-center justify-between">
        <div className="flex flex-1 items-center justify-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center gap-2.5 overflow-hidden rounded-[100px] bg-neutral-100 px-2.5">
            <img className="h-9 w-6" src="https://placehold.co/25x35" />
          </div>
          <div className="flex h-10 w-10 items-center justify-center gap-2.5 overflow-hidden rounded-[100px] bg-neutral-100 px-2.5">
            <img className="h-9 w-6" src="https://placehold.co/25x35" />
          </div>
          <div className="flex h-10 w-10 items-center justify-center gap-2.5 overflow-hidden rounded-[100px] bg-neutral-100 px-2.5">
            <img className="h-9 w-6" src="https://placehold.co/25x35" />
          </div>
        </div>
        <div
          data-right-icon="false"
          data-size="Default"
          data-type="Outline"
          className="flex h-11 items-center justify-start gap-1.5 overflow-hidden rounded bg-white px-6 py-3 outline outline-1 outline-offset-[-1px] outline-gray-400"
        >
          <div className="justify-start font-['Inter'] text-sm leading-normal font-medium text-gray-600">
            Edit Cart
          </div>
        </div>
      </div>
      <div className="absolute top-[16px] left-0 justify-start font-['Inter'] text-base font-semibold text-gray-900">
        Your Order
      </div>
    </div>
  );
};

export default OrderDetails;
