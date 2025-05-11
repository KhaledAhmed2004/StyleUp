import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail } from 'lucide-react';

const ForgotPassowrd = () => {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="flex w-[318px] flex-col items-center">
        <p className="body-regular mb-[24px]">
          Please enter the email address associated with your account. We'll
          promptly send you a link to reset your password.
        </p>
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
        <Button className="body-medium mb-4 w-full">Send reset link</Button>
      </div>
    </section>
  );
};

export default ForgotPassowrd;
