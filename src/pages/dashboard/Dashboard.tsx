import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const Dashboard = () => {
  const barData = [
    { name: 'Jan', sales: 400 },
    { name: 'Feb', sales: 300 },
    { name: 'Mar', sales: 500 },
    { name: 'Apr', sales: 700 },
    { name: 'May', sales: 600 },
  ];

  const lineData = [
    { name: 'Jan', customers: 240 },
    { name: 'Feb', customers: 221 },
    { name: 'Mar', customers: 229 },
    { name: 'Apr', customers: 200 },
    { name: 'May', customers: 278 },
  ];

  const pieData = [
    { name: 'Classic Tees', value: 400 },
    { name: 'Monochromatic', value: 300 },
    { name: 'Essentials', value: 300 },
  ];

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

  return (
    <div className="min-h-screen">
      {/* Top Summary Cards */}
      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Total Sales */}
        <div className="flex flex-col justify-between rounded-xl bg-white p-6 shadow-md">
          <div>
            <h2 className="text-sm font-medium text-gray-500">Total Sales</h2>
            <p className="mt-2 text-2xl font-bold">$4,235</p>
          </div>
          <div className="mt-4 h-24">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" hide />
                <YAxis hide />
                <Tooltip />
                <Bar dataKey="sales" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Customers */}
        <div className="flex flex-col justify-between rounded-xl bg-white p-6 shadow-md">
          <div>
            <h2 className="text-sm font-medium text-gray-500">Customers</h2>
            <p className="mt-2 text-2xl font-bold">2,571</p>
          </div>
          <div className="mt-4 h-24">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <XAxis dataKey="name" hide />
                <YAxis hide />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="customers"
                  stroke="#82ca9d"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Orders */}
        <div className="flex flex-col justify-between rounded-xl bg-white p-6 shadow-md">
          <div>
            <h2 className="text-sm font-medium text-gray-500">Orders</h2>
            <p className="mt-2 text-2xl font-bold">734</p>
            <p className="mt-1 text-xs text-gray-400">Monthly Goal: 1,000</p>
          </div>
          <div className="mt-4">
            <div className="h-3 w-full rounded-full bg-gray-200">
              <div
                className="h-3 rounded-full bg-blue-500"
                style={{ width: '73%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Best Selling */}
        <div className="rounded-xl bg-white p-6 shadow-md">
          <h2 className="mb-4 text-lg font-semibold text-gray-800">
            Best Selling
          </h2>
          <p className="mb-2 text-2xl font-bold">$2,400</p>
          <p className="mb-6 text-sm text-gray-500">Total Sales</p>

          {/* Product List */}
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>Classic Monochrome Tees</span>
              <span>$940</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Monochromatic Wardrobe</span>
              <span>$790</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Essential Neutrals</span>
              <span>$740</span>
            </div>
          </div>

          {/* Donut Chart */}
          <div className="mt-8 flex justify-center">
            <ResponsiveContainer width={200} height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  innerRadius={50}
                  outerRadius={80}
                  dataKey="value"
                  paddingAngle={5}
                >
                  {pieData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="overflow-x-auto rounded-xl bg-white p-6 shadow-md lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">
              Recent Orders
            </h2>
            <button className="text-sm text-blue-500">View All</button>
          </div>

          {/* Table */}
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b">
                <th className="pb-2">Item</th>
                <th className="pb-2">Date</th>
                <th className="pb-2">Total</th>
                <th className="pb-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3">Mens Black T-Shirts</td>
                <td>20 Mar, 2023</td>
                <td>$75.00</td>
                <td>Processing</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">Essential Neutrals</td>
                <td>19 Mar, 2023</td>
                <td>$22.00</td>
                <td>Processing</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">Sleek and Cozy Black</td>
                <td>7 Feb, 2023</td>
                <td>$57.00</td>
                <td>Completed</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">MOCKUP Black</td>
                <td>29 Jan, 2023</td>
                <td>$30.00</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td className="py-3">Monochromatic Wardrobe</td>
                <td>27 Jan, 2023</td>
                <td>$27.00</td>
                <td>Completed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
