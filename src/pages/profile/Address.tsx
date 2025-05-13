import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';

const Address = () => {
  return (
    <div className="">
      <h3 className="mb-4 text-lg font-semibold">Shipping Address</h3>
      <div>
        {/* Street Address Field */}
        <div className="mb-4 w-full space-y-2">
          <Label
            className="body-medium text-neutral-black-b600"
            htmlFor="streetAddress"
          >
            Street Address
          </Label>
          <Input
            id="streetAddress"
            type="text"
            placeholder="Enter your Street Address"
            className="!bg-white !px-4 !py-[10px]"
          />
        </div>

        {/* City and State Fields */}
        <div className="flex gap-4">
          <div className="mb-4 w-full space-y-2">
            <Label
              className="body-medium text-neutral-black-b600"
              htmlFor="city"
            >
              City
            </Label>
            <Input
              id="city"
              type="text"
              placeholder="Enter your City"
              className="!bg-white !px-4 !py-[10px]"
            />
          </div>

          <div className="mb-4 w-full space-y-2">
            <Label
              className="body-medium text-neutral-black-b600"
              htmlFor="state"
            >
              State
            </Label>
            <Input
              id="state"
              type="text"
              placeholder="Enter your State"
              className="!bg-white !px-4 !py-[10px]"
            />
          </div>
        </div>

        {/* Zip Code and Country Fields */}
        <div className="flex gap-4">
          <div className="mb-4 w-full space-y-2">
            <Label
              className="body-medium text-neutral-black-b600"
              htmlFor="zipCode"
            >
              Zip Code
            </Label>
            <Input
              id="zipCode"
              type="text"
              placeholder="Enter your Zip Code"
              className="!bg-white !px-4 !py-[10px]"
            />
          </div>

          <div className="mb-4 w-full space-y-2">
            <Label
              className="body-medium text-neutral-black-b600"
              htmlFor="country"
            >
              Country
            </Label>
            <Input
              id="country"
              type="text"
              placeholder="Enter your Country"
              className="!bg-white !px-4 !py-[10px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
