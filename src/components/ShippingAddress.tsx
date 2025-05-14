const ShipingAddress = () => {
  return (
    <div>
      <h2>Shipping Address</h2>
      <div className="inline-flex w-[536px] flex-wrap content-start items-start justify-start gap-4">
        <div className="inline-flex w-[534px] flex-col items-start justify-center">
          <div className="relative h-6 self-stretch">
            <div className="absolute top-0 left-0 justify-start font-['Inter'] text-sm leading-normal font-medium text-zinc-600">
              Street Address
            </div>
            <div className="absolute top-0 left-[475px] h-6 w-20" />
          </div>
          <div className="inline-flex items-center justify-start gap-2 self-stretch rounded-md px-3.5 py-2.5 outline outline-1 outline-offset-[-1px] outline-gray-200" />
        </div>
        <div className="inline-flex w-64 flex-col items-start justify-center">
          <div className="relative h-6 self-stretch">
            <div className="absolute top-0 left-0 justify-start font-['Inter'] text-sm leading-normal font-medium text-zinc-600">
              City
            </div>
            <div className="absolute top-0 left-[200px] h-6 w-20" />
          </div>
          <div className="inline-flex items-center justify-start gap-2 self-stretch rounded-md px-3.5 py-2.5 outline outline-1 outline-offset-[-1px] outline-gray-200" />
        </div>
        <div className="inline-flex w-64 flex-col items-start justify-center">
          <div className="relative h-6 self-stretch">
            <div className="absolute top-0 left-0 justify-start font-['Inter'] text-sm leading-normal font-medium text-zinc-600">
              State
            </div>
            <div className="absolute top-0 left-[200px] h-6 w-20" />
          </div>
          <div className="inline-flex items-center justify-start gap-2 self-stretch rounded-md px-3.5 py-2.5 outline outline-1 outline-offset-[-1px] outline-gray-200" />
        </div>
        <div className="inline-flex w-64 flex-col items-start justify-center">
          <div className="relative h-6 self-stretch">
            <div className="absolute top-0 left-0 justify-start font-['Inter'] text-sm leading-normal font-medium text-zinc-600">
              Zip Code
            </div>
            <div className="absolute top-0 left-[200px] h-6 w-20" />
          </div>
          <div className="inline-flex items-center justify-start gap-2 self-stretch rounded-md px-3.5 py-2.5 outline outline-1 outline-offset-[-1px] outline-gray-200" />
        </div>
        <div className="inline-flex w-64 flex-col items-start justify-center">
          <div className="relative h-6 self-stretch">
            <div className="absolute top-0 left-0 justify-start font-['Inter'] text-sm leading-normal font-medium text-zinc-600">
              Country
            </div>
            <div className="absolute top-0 left-[200px] h-6 w-20" />
          </div>
          <div className="inline-flex items-center justify-start gap-2 self-stretch rounded-md px-3.5 py-2.5 outline outline-1 outline-offset-[-1px] outline-gray-200" />
        </div>
      </div>
      <div className="inline-flex items-start justify-start gap-4">
        <div className="inline-flex w-64 flex-col items-start justify-center">
          <div className="relative h-6 self-stretch">
            <div className="absolute top-0 left-0 justify-start font-['Inter'] text-sm leading-normal font-medium text-zinc-600">
              Email
            </div>
            <div className="absolute top-0 left-[200px] h-6 w-20" />
          </div>
          <div className="inline-flex items-center justify-start gap-2 self-stretch rounded-md px-3.5 py-2.5 outline outline-1 outline-offset-[-1px] outline-gray-200" />
        </div>
        <div className="inline-flex w-64 flex-col items-start justify-center">
          <div className="relative h-6 self-stretch">
            <div className="absolute top-0 left-0 justify-start font-['Inter'] text-sm leading-normal font-medium text-zinc-600">
              Full name
            </div>
            <div className="absolute top-0 left-[200px] h-6 w-20" />
          </div>
          <div className="inline-flex items-center justify-start gap-2 self-stretch rounded-md px-3.5 py-2.5 outline outline-1 outline-offset-[-1px] outline-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default ShipingAddress;
