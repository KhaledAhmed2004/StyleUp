const FiterSidbar = () => {
  return (
    <div>
      <div className="inline-flex w-60 flex-col items-center justify-start gap-10 overflow-hidden rounded-md pt-6 pr-3 pb-8 pl-4 outline outline-1 outline-offset-[-1px] outline-gray-200">
        <div className="relative h-80 w-52">
          <div className="absolute top-[41px] left-0 inline-flex w-48 flex-col items-start justify-center">
            <div className="inline-flex items-center justify-start gap-2 self-stretch border-b border-gray-200 px-1 py-3">
              <div
                data-state="Default"
                className="flex items-center justify-start gap-2.5"
              >
                <div className="relative h-4 w-4 rounded-[3px] border-2 border-gray-200" />
                <div className="justify-start font-['Inter'] text-sm leading-normal font-normal text-zinc-600">
                  Perfume
                </div>
              </div>
            </div>
            <div className="inline-flex items-center justify-start gap-2 self-stretch border-b border-gray-200 px-1 py-3">
              <div
                data-state="Default"
                className="flex items-center justify-start gap-2.5"
              >
                <div className="relative h-4 w-4 rounded-[3px] border-2 border-gray-200" />
                <div className="justify-start font-['Inter'] text-sm leading-normal font-normal text-zinc-600">
                  Trousers
                </div>
              </div>
            </div>
            <div className="inline-flex items-center justify-start gap-2 self-stretch border-b border-gray-200 px-1 py-3">
              <div
                data-state="Default"
                className="flex items-center justify-start gap-2.5"
              >
                <div className="relative h-4 w-4 rounded-[3px] border-2 border-gray-200" />
                <div className="justify-start font-['Inter'] text-sm leading-normal font-normal text-zinc-600">
                  Shoe
                </div>
              </div>
            </div>
            <div className="inline-flex items-center justify-start gap-2 self-stretch border-b border-gray-200 px-1 py-3">
              <div
                data-state="Default"
                className="flex items-center justify-start gap-2.5"
              >
                <div className="relative h-4 w-4 rounded-[3px] border-2 border-gray-200" />
                <div className="justify-start font-['Inter'] text-sm leading-normal font-normal text-zinc-600">
                  Handbag
                </div>
              </div>
            </div>
            <div className="inline-flex items-center justify-start gap-2 self-stretch border-b border-gray-200 px-1 py-3">
              <div
                data-state="Default"
                className="flex items-center justify-start gap-2.5"
              >
                <div className="relative h-4 w-4 rounded-[3px] border-2 border-gray-200" />
                <div className="justify-start font-['Inter'] text-sm leading-normal font-normal text-zinc-600">
                  Hat
                </div>
              </div>
            </div>
            <div className="inline-flex items-center justify-start gap-2 self-stretch border-b border-gray-200 px-1 py-3">
              <div
                data-state="Default"
                className="flex items-center justify-start gap-2.5"
              >
                <div className="relative h-4 w-4 rounded-[3px] border-2 border-gray-200" />
                <div className="justify-start font-['Inter'] text-sm leading-normal font-normal text-zinc-600">
                  Thermos
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 justify-start text-center font-['Inter'] text-sm leading-normal font-medium text-gray-900">
            Categories
          </div>
        </div>
        <div className="relative h-20 w-52">
          <div className="absolute top-[41px] left-[-1px] inline-flex w-48 items-center justify-start gap-2.5">
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
            <div
              data-state="Default"
              className="flex h-8 w-8 items-center justify-center gap-2 rounded-[100px]"
            >
              <div className="h-6 w-6 rounded-[100px] bg-blue-500" />
            </div>
          </div>
          <div className="absolute top-[4px] left-[-1px] justify-start text-center font-['Inter'] text-sm leading-normal font-medium text-gray-900">
            Color
          </div>
        </div>
        <div className="relative h-36 w-52">
          <div className="absolute top-[49px] left-[-1px] inline-flex w-48 flex-wrap content-end items-end justify-start gap-2">
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
                L
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
          <div className="absolute top-[12px] left-[-1px] justify-start text-center font-['Inter'] text-sm leading-normal font-medium text-gray-900">
            Size
          </div>
        </div>
        <div className="relative h-24 w-52">
          <div className="absolute top-[49px] left-[1px] h-4 w-48">
            <div className="absolute top-[6px] left-0 h-1 w-48 rounded-[10px] bg-gray-200" />
            <div className="absolute top-[6px] left-[30px] h-1 w-14 bg-gray-500" />
            <div className="absolute top-0 left-[12px] h-4 w-4 rounded-[100px] bg-gray-900 outline outline-2 outline-white" />
            <div className="absolute top-0 left-[91px] h-4 w-4 rounded-[100px] bg-gray-900 outline outline-2 outline-white" />
          </div>
          <div className="absolute top-0 left-[1px] justify-start text-center font-['Inter'] text-sm leading-normal font-medium text-gray-900">
            Price
          </div>
          <div
            data-arrow="Top"
            className="absolute top-[77px] left-[82px] h-7 w-20"
          >
            <div className="absolute top-[3px] left-0 inline-flex h-6 items-center justify-center gap-2.5 overflow-hidden rounded bg-gray-900 px-2 py-1">
              <div className="justify-start font-['Inter'] text-xs leading-normal font-medium text-white capitalize">
                $ 890.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiterSidbar;
