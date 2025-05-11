import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';

const AccountDetails = () => {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">Account Details</h3>

      {/* Profile Initials */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-300 text-xl font-bold text-white">
        KN
      </div>

      <div>
        {/* Full Name Field */}
        <div className="mb-4 w-full space-y-2">
          <Label
            className="body-medium text-neutral-black-b600"
            htmlFor="fullName"
          >
            Full Name
          </Label>
          <Input
            id="fullName"
            type="text"
            placeholder="Enter your Full Name"
            className="!bg-white !px-4 !py-[10px]"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4 w-full space-y-2">
          <Label
            className="body-medium text-neutral-black-b600"
            htmlFor="email"
          >
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your Email"
            className="!bg-white !px-4 !py-[10px]"
          />
        </div>
      </div>

      {/* Save Button */}
      <Button className="mt-4">Save Changes</Button>
    </div>
  );
};

export default AccountDetails;
