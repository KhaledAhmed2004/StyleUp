import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, User } from 'lucide-react';

const ResetPassword = () => {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="flex w-[318px] flex-col items-center">
        {/* Name Field */}
        <div className="mb-4 w-full space-y-2">
          <Label className="body-medium text-neutral-black-b600" htmlFor="name">
            Name
          </Label>
          <div className="relative">
            <Input
              id="name"
              type="text"
              placeholder="Enter your Name"
              className="!bg-white !py-[10px] !pr-4 !pl-10"
            />
            <User
              className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="mb-4 w-full space-y-2">
          <Label
            className="body-medium text-neutral-black-b600"
            htmlFor="email"
          >
            Email
          </Label>
          <div className="relative">
            <Input
              id="email"
              type="email"
              placeholder="Enter your Email"
              className="!bg-white !py-[10px] !pr-4 !pl-10"
            />
            <Mail
              className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>

        {/* Create Account Button */}
        <Button className="mb-4 w-full body-medium">Reset password</Button>
      </div>
    </section>
  );
};

export default ResetPassword;
