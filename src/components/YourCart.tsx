const YourCart = () => {
  return (
    <div>
      <h2>Your Cart</h2>
      <div className="border"></div>
      <div>
        <div>
          <div data-type="Default" className="relative h-20 w-[628px]">
            <div className="absolute top-[20px] left-[588px] inline-flex h-10 w-10 items-center justify-center gap-2.5 overflow-hidden rounded bg-neutral-100 p-2.5">
              <div className="flex h-8 w-5 items-center justify-center gap-2.5 overflow-hidden">
                <div className="relative h-5 w-5 overflow-hidden">
                  <div className="absolute top-[5px] left-[5px] h-2.5 w-2.5 outline outline-[1.70px] outline-offset-[-0.85px] outline-gray-600" />
                  <div className="absolute top-[5px] left-[5px] h-2.5 w-2.5 outline outline-[1.70px] outline-offset-[-0.85px] outline-gray-600" />
                </div>
              </div>
            </div>
            <div className="absolute top-[8.50px] left-[112px] inline-flex flex-col items-start justify-center gap-1.5">
              <div className="justify-start text-center font-['Inter'] text-sm leading-normal font-medium text-gray-900">
                Raw Black T-Shirt Lineup
              </div>
              <div className="inline-flex items-center justify-start gap-2">
                <div className="justify-start text-center font-['Inter'] text-xs leading-normal font-medium text-gray-600 capitalize">
                  Color:{' '}
                </div>
                <div className="relative h-3 w-3 rounded-[100px] bg-neutral-400" />
                <div className="justify-start text-center font-['Inter'] text-xs leading-normal font-medium tracking-wide text-gray-600 uppercase">
                  —
                </div>
                <div className="justify-start text-center font-['Inter'] text-xs leading-normal font-medium text-gray-600 capitalize">
                  Size: M
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0 inline-flex h-20 w-20 items-center justify-center gap-2.5 overflow-hidden rounded bg-neutral-100 px-2.5">
              <img className="h-16 w-11" src="https://placehold.co/44x62" />
            </div>
            <div className="absolute top-[27px] left-[386px] justify-start text-center">
              <span className="font-['Inter'] text-sm leading-normal font-medium text-gray-900">
                $
              </span>
              <span className="font-['Inter'] text-sm font-medium text-gray-900">
                75.00
              </span>
            </div>
            <div
              data-size="Small"
              className="absolute top-[20px] left-[465px] inline-flex h-10 w-28 min-w-10 items-center justify-start gap-4 overflow-hidden rounded px-4 outline outline-1 outline-offset-[-1px] outline-gray-200"
            >
              <div className="relative h-4 w-4 overflow-hidden">
                <div className="absolute top-[8px] left-[3.33px] h-0 w-2 outline outline-[1.70px] outline-offset-[-0.85px] outline-gray-600" />
              </div>
              <div className="justify-start text-center font-['Inter'] text-sm leading-normal font-medium text-gray-800">
                1
              </div>
              <div className="relative h-4 w-4 overflow-hidden">
                <div className="absolute top-[4px] left-[8px] h-2 w-0 outline outline-[1.70px] outline-offset-[-0.85px] outline-gray-600" />
                <div className="absolute top-[8px] left-[4px] h-0 w-2 outline outline-[1.70px] outline-offset-[-0.85px] outline-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourCart;
