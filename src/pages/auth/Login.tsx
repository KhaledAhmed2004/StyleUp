// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@radix-ui/react-label';
// import { Link } from 'react-router';
// import { FcGoogle } from 'react-icons/fc';

// const Login = () => {
//   return (
//     <section>
//       <div className="mx-auto flex h-[720px] w-[318px] flex-col items-center justify-center">
//         <Button variant={'secondary'} className="w-full">
//           <FcGoogle /> Continu withGoogle
//         </Button>
//         <div className="mt-[32px] mb-[36px] inline-flex w-80 items-center justify-center gap-4">
//           <div className="h-0 w-full outline-1 outline-offset-[-0.50px] outline-gray-200"></div>
//           <p className="label-loose-medium text-neutral-black-b500">OR</p>
//           <div className="h-0 w-full outline-1 outline-offset-[-0.50px] outline-gray-200"></div>
//         </div>
//         <div className="mb-[15px] w-full">
//           <Label
//             className="body-medium text-neutral-black-b600"
//             htmlFor="email"
//           >
//             Email
//           </Label>
//           <Input
//             className="!bg-white !px-[15px] !py-[10px]"
//             type="email"
//             id="email"
//             placeholder="Enter your Email"
//           />
//         </div>
//         <div className="w-full">
//           <Label
//             className="body-medium text-neutral-black-b600"
//             htmlFor="email"
//           >
//             Passwrod
//           </Label>
//           <Input
//             className="!bg-white !px-[15px] !py-[10px]"
//             type="email"
//             id="email"
//             placeholder="Enter your passwrod"
//           />
//         </div>
//         <Link
//           to={'/auth/forgot-password'}
//           className="label-normal-medium mt-[16px] mb-[24px] flex items-end justify-end text-right"
//         >
//           Forgot Password?
//         </Link>
//         <Button className="body-medium w-full">Login</Button>
//         <p className="body-regular text-neutral-black-b500">
//           Don't have an account? Sign up
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Login;

import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import { Separator } from '@/components/ui/separator';
import { FcGoogle } from 'react-icons/fc';
import { KeyRound, Mail } from 'lucide-react';

const Login = () => {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="flex w-[318px] flex-col items-center">
        {/* Google Button */}
        <Button variant="secondary" className="w-full gap-2">
          <FcGoogle size={20} /> Continue with Google
        </Button>

        {/* Divider */}
        <div className="mt-8 mb-9 flex w-80 items-center justify-center gap-4">
          <Separator className="flex-1" />
          <p className="label-loose-medium text-neutral-black-b500">OR</p>
          <Separator className="flex-1" />
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

        {/* Password Field */}
        <div className="w-full space-y-2">
          <Label
            className="body-medium text-neutral-black-b600"
            htmlFor="password"
          >
            Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              type="password"
              placeholder="Enter your Password"
              className="!bg-white !py-[10px] !pr-4 !pl-10"
            />
            <KeyRound
              className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>

        {/* Forgot Password */}
        <div className="mt-2 mb-6 flex w-full justify-end">
          <Link
            to="/auth/forgot-password"
            className="label-normal-medium text-sm text-gray-500 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <Button className="mb-4 w-full body-medium">Login</Button>

        {/* Sign up link */}
        <p className="text-center body-regular text-neutral-black-b500">
          Don't have an account?{' '}
          <Link to="/auth/sign-up" className="text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
