import ProductItem from '@/components/ProductItem';
import img from '../../assets/brownteshart.png';

const orders = [
  {
    title: 'Raw Black T-Shirt Lineup',
    date: '27 July 2023',
    price: 70.0,
    status: 'Processing',
    image: img,
  },
  {
    title: 'Premium White Hoodie',
    date: '01 August 2023',
    price: 120.5,
    status: 'Delivered',
    image: img,
  },
  {
    title: 'Casual Blue Jeans',
    date: '15 August 2023',
    price: 85.99,
    status: 'Shipped',
    image: img,
  },
];

const Order = () => {
  return (
    <div className="p-6">
      <h3 className="mb-6 text-2xl font-semibold">Orders</h3>

      <div className="flex flex-col gap-6">
        {/* Map through orders array */}
        {orders.map((order, index) => (
          <ProductItem
            key={index}
            title={order.title}
            date={order.date}
            price={order.price}
            status={order.status}
            image={order.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Order;
