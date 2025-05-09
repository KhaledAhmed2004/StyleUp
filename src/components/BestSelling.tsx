// // import img1 from '../assets/blackTeshart.png';
// // import img2 from '../assets/brownteshart.png';
// // import img3 from '../assets/whiteteshart.png';
// // import img4 from '../assets/blackwithtext.png';

// // const BestSelling = () => {
// //   return (
// //     <section className="mx-auto mt-[72px] max-w-7xl">
// //       <div className="mb-[80px] flex justify-center">
// //         <div>
// //           <p>SHOP NOW</p>
// //           <h3 className="text-[24px] font-bold">Best Selling</h3>
// //         </div>
// //       </div>
// //       {/* Products */}
// //       <div className="flex justify-between">
// //         <div className="flex h-[434px] w-[264px] flex-col gap-[16px] px-[8px] py-[24px]">
// //           <div className="h-[321px] w-[248px] rounded-[4px] bg-neutral-white-w100">
// //             <img src={img1} alt="" />
// //           </div>
// //           <div className="flex flex-col gap-[12px]">
// //             <h5 className="text-[14px] font-medium">Classic Monochrome Tees</h5>
// //             <div className="flex gap-[16px]">
// //               <div className="rounded-full border px-[16px] py-[2px] text-[12px] font-medium">
// //                 IN STOCK
// //               </div>
// //               <p>$35.00</p>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="flex h-[434px] w-[264px] flex-col gap-[16px] px-[8px] py-[24px]">
// //           <div className="h-[321px] w-[248px] rounded-[4px] bg-neutral-white-w100">
// //             <img src={img2} alt="" />
// //           </div>
// //           <div className="flex flex-col gap-[12px]">
// //             <h5 className="text-[14px] font-medium">Classic Monochrome Tees</h5>
// //             <div className="flex gap-[16px]">
// //               <div className="rounded-full border px-[16px] py-[2px] text-[12px] font-medium">
// //                 IN STOCK
// //               </div>
// //               <p>$35.00</p>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="flex h-[434px] w-[264px] flex-col gap-[16px] px-[8px] py-[24px]">
// //           <div className="h-[321px] w-[248px] rounded-[4px] bg-neutral-white-w100">
// //             <img src={img3} alt="" />
// //           </div>
// //           <div className="flex flex-col gap-[12px]">
// //             <h5 className="text-[14px] font-medium">Classic Monochrome Tees</h5>
// //             <div className="flex gap-[16px]">
// //               <div className="rounded-full border px-[16px] py-[2px] text-[12px] font-medium">
// //                 IN STOCK
// //               </div>
// //               <p>$35.00</p>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="flex h-[434px] w-[264px] flex-col gap-[16px] px-[8px] py-[24px]">
// //           <div className="h-[321px] w-[248px] rounded-[4px] bg-neutral-white-w100">
// //             <img src={img4} alt="" />
// //           </div>
// //           <div className="flex flex-col gap-[12px]">
// //             <h5 className="text-[14px] font-medium">Classic Monochrome Tees</h5>
// //             <div className="flex gap-[16px]">
// //               <div className="rounded-full border px-[16px] py-[2px] text-[12px] font-medium">
// //                 IN STOCK
// //               </div>
// //               <p>$35.00</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default BestSelling;
// import React from 'react';
// import img1 from '../assets/blackTeshart.png';
// import img2 from '../assets/brownteshart.png';
// import img3 from '../assets/whiteteshart.png';
// import img4 from '../assets/blackwithtext.png';

// const products = [
//   { id: 1, image: img1, title: 'Classic Monochrome Tees', price: 35, inStock: true },
//   { id: 2, image: img2, title: 'Classic Monochrome Tees', price: 35, inStock: true },
//   { id: 3, image: img3, title: 'Classic Monochrome Tees', price: 35, inStock: true },
//   { id: 4, image: img4, title: 'Classic Monochrome Tees', price: 35, inStock: true },
// ];

// const ProductCard = ({ imageSrc, title, price, inStock }) => (
//   <div className="flex h-[434px] w-[264px] flex-col gap-4 px-2 py-6">
//     {/* Image wrapper */}
//     <div className="flex h-[321px] w-full items-center justify-center rounded-sm bg-neutral-white-w100 overflow-hidden">
//       <img
//         src={imageSrc}
//         alt={title}
//         className="h-full w-full object-contain object-center"
//       />
//     </div>
//     {/* Info */}
//     <div className="flex flex-col gap-3">
//       <h5 className="text-sm font-medium">{title}</h5>
//       <div className="flex items-center gap-4">
//         <span
//           className={`rounded-full border px-4 py-1 text-xs font-medium ${
//             inStock ? 'border-green-500 text-green-600' : 'border-red-500 text-red-600'
//           }`}
//         >
//           {inStock ? 'IN STOCK' : 'OUT OF STOCK'}
//         </span>
//         <p className="font-semibold">${price.toFixed(2)}</p>
//       </div>
//     </div>
//   </div>
// );

// const BestSelling = () => (
//   <section className="mx-auto mt-[72px] max-w-7xl">
//     <div className="mb-[80px] flex justify-center">
//       <div className="text-center">
//         <p className="uppercase text-sm tracking-widest">Shop Now</p>
//         <h3 className="mt-2 text-2xl font-bold">Best Selling</h3>
//       </div>
//     </div>

//     <div className="flex justify-between">
//       {products.map((p) => (
//         <ProductCard
//           key={p.id}
//           imageSrc={p.image}
//           title={p.title}
//           price={p.price}
//           inStock={p.inStock}
//         />
//       ))}
//     </div>
//   </section>
// );

// export default BestSelling;

import img1 from '../assets/blackTeshart.png';
import img2 from '../assets/brownteshart.png';
import img3 from '../assets/whiteteshart.png';
import img4 from '../assets/blackwithtext.png';

const products = [
  {
    id: 1,
    image: img1,
    title: 'Classic Monochrome Tees',
    price: 35,
    inStock: true,
  },
  {
    id: 2,
    image: img2,
    title: 'Monochromatic Wardrobe',
    price: 27,
    inStock: true,
  },
  { id: 3, image: img3, title: 'Essential Neutrals', price: 22, inStock: true },
  { id: 4, image: img4, title: 'UTRAANET Black', price: 43, inStock: true },
];

const ProductCard = ({ imageSrc, title, price, inStock }) => (
  <div className="flex h-[434px] w-[264px] flex-col gap-4 px-2 py-6">
    {/* Image wrapper: fixed square area */}
    <div className="flex h-[321px] w-full items-center justify-center overflow-hidden rounded-sm bg-neutral-white-w100">
      {/* Force images to same max height and auto width */}
      <img
        src={imageSrc}
        alt={title}
        className="max-h-[80%] w-auto object-contain object-center"
      />
    </div>
    {/* Info */}
    <div className="flex flex-col gap-3">
      <h5 className="text-sm font-medium">{title}</h5>
      <div className="flex items-center gap-4">
        <span
          className={`rounded-full border px-4 py-1 text-xs font-medium ${
            inStock
              ? 'border-green-500 text-green-600'
              : 'border-red-500 text-red-600'
          }`}
        >
          {inStock ? 'IN STOCK' : 'OUT OF STOCK'}
        </span>
        <p className="font-semibold">${price.toFixed(2)}</p>
      </div>
    </div>
  </div>
);

const BestSelling = () => (
  <section className="mx-auto mt-[72px] max-w-7xl">
    <div className="mb-[80px] flex justify-center">
      <div className="text-center">
        <p className="text-sm tracking-widest uppercase">Shop Now</p>
        <h3 className="mt-2 text-2xl font-bold">Best Selling</h3>
      </div>
    </div>

    <div className="flex justify-between">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          imageSrc={p.image}
          title={p.title}
          price={p.price}
          inStock={p.inStock}
        />
      ))}
    </div>
  </section>
);

export default BestSelling;
