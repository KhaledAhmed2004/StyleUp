import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';

const Password = () => {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">Change Password</h3>
      <div>
        {/* New Password Field */}
        <div className="mb-4 w-full space-y-2">
          <Label
            className="body-medium text-neutral-black-b600"
            htmlFor="newPassword"
          >
            New Password
          </Label>
          <Input
            id="newPassword"
            type="password"
            placeholder="Enter your New Password"
            className="!bg-white !px-4 !py-[10px]"
          />
        </div>

        {/* Confirm Password Field */}
        <div className="mb-4 w-full space-y-2">
          <Label
            className="body-medium text-neutral-black-b600"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your New Password"
            className="!bg-white !px-4 !py-[10px]"
          />
        </div>
      </div>

      {/* Change Password Button */}
      <Button className="mt-4">Change Password</Button>
    </div>
  );
};

export default Password;
