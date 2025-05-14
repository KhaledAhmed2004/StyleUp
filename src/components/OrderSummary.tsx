const OrderSummarny = () => {
  return (
    <div className="relative h-96 w-80 overflow-hidden rounded outline outline-1 outline-offset-[-1px] outline-gray-200">
      <div className="absolute top-[372px] left-[116px] justify-start font-['Inter'] text-xs leading-none font-medium text-gray-900 underline">
        Continue Shopping
      </div>
      <div
        data-right-icon="false"
        data-size="Default"
        data-type="Default"
        className="absolute top-[296px] left-[24px] inline-flex h-11 w-72 items-center justify-center gap-1.5 overflow-hidden rounded bg-gray-900 px-6 py-3"
      >
        <div className="justify-start font-['Inter'] text-sm leading-normal font-medium text-white">
          Checkout
        </div>
      </div>
      <div className="absolute top-[239px] left-[24px] inline-flex w-72 items-center justify-between">
        <div className="justify-start font-['Inter'] text-sm leading-normal font-medium text-gray-900">
          Total
        </div>
        <div className="justify-start font-['Inter'] text-sm font-medium text-gray-900">
          $ 100.00
        </div>
      </div>
      <div className="absolute top-[214px] left-[24px] h-px w-72 bg-gray-200" />
      <div className="absolute top-[165px] left-[24px] inline-flex w-72 items-center justify-between">
        <div className="justify-start font-['Inter'] text-sm leading-normal font-medium text-gray-600">
          Tax:{' '}
        </div>
        <div className="justify-start font-['Inter'] text-sm leading-normal font-medium text-gray-900">
          $ 3.00
        </div>
      </div>
      <div className="absolute top-[128px] left-[24px] inline-flex w-72 items-center justify-between">
        <div className="justify-start font-['Inter'] text-sm leading-normal font-medium text-gray-600">
          Shipping:{' '}
        </div>
        <div className="justify-start font-['Inter'] text-sm leading-normal font-medium text-gray-900">
          Free
        </div>
      </div>
      <div className="absolute top-[91px] left-[24px] inline-flex w-72 items-center justify-between">
        <div className="justify-start font-['Inter'] text-sm leading-normal font-medium text-gray-600">
          Subtotal
        </div>
        <div className="justify-start font-['Inter'] text-sm leading-normal font-medium text-gray-900">
          $ 90.00
        </div>
      </div>
      <div className="absolute top-[32px] left-[24px] justify-start font-['Inter'] text-base font-semibold text-gray-900">
        Order Summary
      </div>
    </div>
  );
};

export default OrderSummarny;
