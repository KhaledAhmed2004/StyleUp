import { useState } from 'react';
import { Slider } from '@/components/ui/slider';

const FilterSidebar = () => {
  const categories = [
    'Perfume',
    'Trousers',
    'Shoe',
    'Handbag',
    'Hat',
    'Thermos',
  ];
  const colors = [
    'bg-indigo-300',
    'bg-amber-200',
    'bg-neutral-400',
    'bg-blue-500',
  ];
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([100, 890]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const handleColorChange = (color: string) => {
    setSelectedColor((prev) => (prev === color ? null : color));
  };

  const handleSizeChange = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size],
    );
  };

  const handleResetFilters = () => {
    setSelectedCategories([]);
    setSelectedColor(null);
    setSelectedSizes([]);
    setPriceRange([100, 890]);
  };

  return (
    <div className="inline-flex w-60 flex-col items-center justify-start gap-10 overflow-hidden rounded-md pt-6 pr-3 pb-8 pl-4 outline-1 outline-offset-[-1px] outline-gray-200">
      {/* Categories */}
      <div className="relative h-80 w-52">
        <div className="absolute top-0 left-0 text-sm font-medium text-gray-900">
          Categories
        </div>
        <div className="absolute top-[41px] left-0 flex w-48 flex-col gap-3">
          {categories.map((cat) => (
            <label
              key={cat}
              className="flex cursor-pointer items-center gap-2 border-b border-gray-200 px-1 py-3"
            >
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300"
                checked={selectedCategories.includes(cat)}
                onChange={() => handleCategoryChange(cat)}
              />
              <span className="text-sm text-zinc-600">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Color */}
      <div className="relative h-20 w-52">
        <div className="absolute top-0 left-0 text-sm font-medium text-gray-900">
          Color
        </div>
        <div className="absolute top-[41px] left-[-1px] flex gap-2.5">
          {colors.map((color, idx) => (
            <div
              key={idx}
              className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full outline ${
                selectedColor === color
                  ? 'outline-gray-900'
                  : 'outline-gray-300'
              }`}
              onClick={() => handleColorChange(color)}
            >
              <div className={`h-6 w-6 rounded-full ${color}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Size */}
      <div className="relative h-36 w-52">
        <div className="absolute top-0 left-0 text-sm font-medium text-gray-900">
          Size
        </div>
        <div className="absolute top-[49px] left-0 flex w-48 flex-wrap gap-2">
          {sizes.map((size, idx) => (
            <div
              key={idx}
              onClick={() => handleSizeChange(size)}
              className={`flex h-10 min-w-10 cursor-pointer items-center justify-center rounded outline ${
                selectedSizes.includes(size)
                  ? 'outline-gray-900'
                  : 'outline-gray-200'
              }`}
            >
              <span className="text-xs font-medium text-gray-600">{size}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Price Slider */}
      <div className="relative h-24 w-52">
        <div className="mb-3 text-sm font-medium text-gray-900">Price</div>
        <Slider
          defaultValue={priceRange}
          value={priceRange}
          onValueChange={(val: [number, number]) => setPriceRange(val)}
          min={0}
          max={1000}
          step={10}
          className="w-full"
        />
        <div className="mt-2 text-xs text-gray-700">
          ${priceRange[0]} - ${priceRange[1]}
        </div>
      </div>

      {/* Reset Button */}
      <div className="flex w-full justify-center">
        <button
          onClick={handleResetFilters}
          className="mt-4 rounded-md bg-gray-900 px-4 py-2 text-xs font-medium text-white hover:bg-gray-800"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
