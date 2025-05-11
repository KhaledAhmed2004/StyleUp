// import { Link } from 'react-router';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@radix-ui/react-label';
// import { Separator } from '@/components/ui/separator';
// import { FcGoogle } from 'react-icons/fc';
// import { KeyRound, Mail } from 'lucide-react';
// import { Checkbox } from '@radix-ui/react-checkbox';

// const SignUp = () => {
//   return (
//     <section className="flex min-h-screen items-center justify-center">
//       <div className="flex w-[318px] flex-col items-center">
//         {/* Google Button */}
//         <Button variant="secondary" className="w-full gap-2">
//           <FcGoogle size={20} /> Continue with Google
//         </Button>

//         {/* Divider */}
//         <div className="mt-8 mb-9 flex w-80 items-center justify-center gap-4">
//           <Separator className="flex-1" />
//           <p className="label-loose-medium text-neutral-black-b500">OR</p>
//           <Separator className="flex-1" />
//         </div>

//         {/* Name Field */}
//         <div className="mb-4 w-full space-y-2">
//           <Label className="body-medium text-neutral-black-b600" htmlFor="name">
//             Name
//           </Label>
//           <div className="relative">
//             <Input
//               id="name"
//               type="text"
//               placeholder="Enter your Name"
//               className="!bg-white !py-[10px] !pr-4 !pl-10"
//             />
//             <Mail
//               className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
//               size={20}
//             />
//           </div>
//         </div>
//         {/* Email Field */}
//         <div className="mb-4 w-full space-y-2">
//           <Label
//             className="body-medium text-neutral-black-b600"
//             htmlFor="email"
//           >
//             Email
//           </Label>
//           <div className="relative">
//             <Input
//               id="email"
//               type="email"
//               placeholder="Enter your Email"
//               className="!bg-white !py-[10px] !pr-4 !pl-10"
//             />
//             <Mail
//               className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
//               size={20}
//             />
//           </div>
//         </div>

//         {/* Password Field */}
//         <div className="w-full space-y-2">
//           <Label
//             className="body-medium text-neutral-black-b600"
//             htmlFor="password"
//           >
//             Password
//           </Label>
//           <div className="relative">
//             <Input
//               id="password"
//               type="password"
//               placeholder="Enter your Password"
//               className="!bg-white !py-[10px] !pr-4 !pl-10"
//             />
//             <KeyRound
//               className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
//               size={20}
//             />
//           </div>
//         </div>

//         {/* Forgot Password */}
//         <div className="flex items-center space-x-2">
//           <Checkbox id="terms" />
//           <label
//             htmlFor="terms"
//             className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//           >
//            By creating an account you agree with our Terms of Service, Privacy Policy,
//           </label>
//         </div>

//         {/* Login Button */}
//         <Button className="body-medium mb-4 w-full">Create account</Button>

//         {/* Sign up link */}
//         <p className="body-regular text-center text-neutral-black-b500">
//           Already have an account?{' '}
//           <Link to="/auth/login" className="text-primary hover:underline">
//             Log in
//           </Link>
//         </p>
//       </div>
//     </section>
//   );
// };

// export default SignUp;
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { FcGoogle } from 'react-icons/fc';
import { Mail, KeyRound, User } from 'lucide-react';

const SignUp = () => {
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
              className="!bg-white !py-[10px] !pl-10 !pr-4"
            />
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        {/* Email Field */}
        <div className="mb-4 w-full space-y-2">
          <Label className="body-medium text-neutral-black-b600" htmlFor="email">
            Email
          </Label>
          <div className="relative">
            <Input
              id="email"
              type="email"
              placeholder="Enter your Email"
              className="!bg-white !py-[10px] !pl-10 !pr-4"
            />
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        {/* Password Field */}
        <div className="mb-4 w-full space-y-2">
          <Label className="body-medium text-neutral-black-b600" htmlFor="password">
            Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              type="password"
              placeholder="Enter your Password"
              className="!bg-white !py-[10px] !pl-10 !pr-4"
            />
            <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        {/* Terms and Conditions Checkbox */}
        <div className="mb-6 mt-2 flex w-full items-start space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            By creating an account, you agree to our{' '}
            <Link to="/terms" className="text-primary hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>.
          </label>
        </div>

        {/* Create Account Button */}
        <Button className="body-medium mb-4 w-full">Create Account</Button>

        {/* Login Link */}
        <p className="body-regular text-center text-neutral-black-b500">
          Already have an account?{' '}
          <Link to="/auth/login" className="text-primary hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
