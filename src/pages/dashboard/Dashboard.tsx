import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';

import { TrendingUp } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  LabelList,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Sector,
  type PieSectorDataItem,
} from 'recharts';

const Dashboard = () => {
  // Bar chart data (sales)
  const salesData = [
    { month: 'January', sales: 186 },
    { month: 'February', sales: 305 },
    { month: 'March', sales: 237 },
    { month: 'April', sales: 73 },
    { month: 'May', sales: 209 },
    { month: 'June', sales: 214 },
  ];

  // Line chart data (customers)
  const customerData = [...salesData].map(({ month, sales }) => ({
    month,
    customers: sales,
  }));

  // Pie chart data (browser visitors or categories)
  const chartData = [
    { browser: 'Chrome', visitors: 400 },
    { browser: 'Safari', visitors: 300 },
    { browser: 'Firefox', visitors: 300 },
  ];

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

  // Chart configs
  const salesConfig = {
    desktop: { label: 'sales', color: 'hsl(var(--chart-1))' },
  } satisfies ChartConfig;

  const customerConfig = {
    desktop: { label: 'customers', color: 'hsl(var(--chart-2))' },
  } satisfies ChartConfig;

  const chartConfig = {
    desktop: { label: 'visitors', color: COLORS[0] },
  } satisfies ChartConfig;

  return (
    <div className="min-h-screen">
      {/* Top Summary Cards */}
      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Bar Chart - Sales */}
        <Card>
          <CardHeader>
            <CardTitle>Bar Chart - Sales</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={salesConfig}>
              <BarChart data={salesData} margin={{ top: 20 }}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  tickFormatter={(v) => v.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="sales" fill="var(--color-desktop)" radius={8}>
                  <LabelList
                    position="top"
                    offset={12}
                    className="fill-foreground"
                    fontSize={12}
                  />
                </Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="flex gap-2 leading-none font-medium">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
              Showing total sales for the last 6 months
            </div>
          </CardFooter>
        </Card>

        {/* Line Chart - Customers */}
        <Card>
          <CardHeader>
            <CardTitle>Line Chart - Customers</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={customerConfig}>
              <LineChart data={customerData} margin={{ left: 12, right: 12 }}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(v) => v.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Line
                  dataKey="customers"
                  type="natural"
                  stroke="blue"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="flex gap-2 leading-none font-medium">
              Trending up by 4.8% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
              Showing total visitors for the last 6 months
            </div>
          </CardFooter>
        </Card>

        {/* Orders Progress */}
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
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Pie Chart - Visitors */}
        <Card className="flex flex-col">
          <CardHeader className="items-center pb-0">
            <h2 className="mb-4 text-lg font-semibold text-gray-800">
              Best Selling
            </h2>
            <p className="mb-2 text-2xl font-bold">$2,400</p>
            <p className="mb-6 text-sm text-gray-500">Total Sales</p>
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
            <CardTitle className="mt-6">Pie Chart - Donut Active</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={chartData}
                  dataKey="visitors"
                  nameKey="browser"
                  innerRadius={60}
                  strokeWidth={5}
                  activeIndex={0}
                  activeShape={({
                    outerRadius = 0,
                    ...props
                  }: PieSectorDataItem) => (
                    <Sector {...props} outerRadius={outerRadius + 10} />
                  )}
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col gap-2 text-sm">
            <div className="flex items-center gap-2 leading-none font-medium">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
              Showing total visitors for the last 6 months
            </div>
          </CardFooter>
        </Card>

        {/* Recent Orders Table */}
        <div className="overflow-x-auto rounded-xl bg-white p-6 shadow-md lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">
              Recent Orders
            </h2>
            <button className="text-sm text-blue-500">View All</button>
          </div>
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
