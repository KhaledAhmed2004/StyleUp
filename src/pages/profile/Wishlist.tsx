// import ProductItem from '@/components/ProductItem';
// import img from '../../assets/brownteshart.png';

// const wishlistItems = [
//   {
//     id: '1',
//     title: 'Cool Sneakers',
//     date: '2025-04-10',
//     price: 79.99,
//     status: 'In Stock',
//     image: img,
//   },
//   {
//     id: '2',
//     title: 'Leather Jacket',
//     date: '2025-03-22',
//     price: 149.5,
//     status: 'Out of Stock',
//     image: img,
//   },
// ];

// const Wishlist = () => {
//   // If no items, show empty state
//   if (wishlistItems.length === 0) {
//     return (
//       <div className="p-6">
//         <h3 className="mb-4 text-xl font-semibold">Wishlist</h3>
//         <p className="text-gray-500">Your wishlist is empty.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6">
//       <h3 className="mb-4 text-xl font-semibold">Wishlist</h3>
//       <div className="flex flex-col gap-4">
//         {wishlistItems.map((item) => (
//           <ProductItem
//             key={item.id}
//             title={item.title}
//             date={item.date}
//             price={item.price}
//             status={item.status}
//             image={item.image}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Wishlist;

import ProductItem from '@/components/ProductItem';
import img from '../../assets/brownteshart.png';

const wishlistItems = [
  {
    id: '1',
    title: 'Cool Sneakers',
    date: '2025-04-10',
    price: 79.99,
    status: 'In Stock',
    image: img,
  },
  {
    id: '2',
    title: 'Leather Jacket',
    date: '2025-03-22',
    price: 149.5,
    status: 'Out of Stock',
    image: img,
  },
];

const Wishlist = () => {
  const handleRemove = async (id: string) => {
    console.log(`Removing item with id: ${id}`);
    // TODO: Add actual remove logic here, like API call or update state
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="p-6">
        <h3 className="mb-4 text-xl font-semibold">Wishlist</h3>
        <p className="text-gray-500">Your wishlist is empty.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h3 className="mb-4 text-xl font-semibold">Wishlist</h3>
      <div className="flex flex-col gap-4">
        {wishlistItems.map((item) => (
          <ProductItem
            key={item.id}
            title={item.title}
            date={item.date}
            price={item.price}
            status={item.status}
            image={item.image}
            mode="wishlist"
            onRemove={() => handleRemove(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
