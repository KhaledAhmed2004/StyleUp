import React from 'react';

const Wishlist = () => {
  return (
    <div>
      <h3>Wishlist</h3>
      <div>
        <div
          data-status="Default"
          data-type="Whishlist"
          className="inline-flex w-[617px] items-center justify-between"
        >
          <div className="relative h-20 w-64">
            <div className="absolute top-[3.50px] left-[112px] inline-flex flex-col items-start justify-center">
              <div className="justify-start text-center font-['Inter'] text-sm leading-normal font-medium text-gray-900">
                Raw Black T-Shirt Lineup
              </div>
              <div className="justify-start text-center font-['Inter'] text-xs leading-normal font-medium text-gray-600 capitalize">
                Added on: 27 July 2023
              </div>
              <div className="justify-start font-['Inter'] text-xs leading-normal font-medium text-gray-900 capitalize">
                Remove item
              </div>
            </div>
            <div className="absolute top-0 left-0 inline-flex h-20 w-20 items-center justify-center gap-2.5 overflow-hidden rounded bg-neutral-100 px-2.5">
              <img className="h-16 w-11" src="https://placehold.co/44x62" />
            </div>
          </div>
          <div className="flex items-center justify-end gap-8">
            <div className="justify-start text-center font-['Inter'] text-sm leading-normal font-medium text-gray-900">
              $75.00
            </div>
            <div
              data-right-icon="false"
              data-size="Default"
              data-type="Outline Black"
              className="flex h-11 items-center justify-start gap-1.5 overflow-hidden rounded bg-white px-6 py-3 outline outline-1 outline-offset-[-1px] outline-gray-900"
            >
              <div className="justify-start font-['Inter'] text-sm leading-normal font-medium text-gray-900">
                Add to cart
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
