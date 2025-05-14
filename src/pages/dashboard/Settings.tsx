import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { InputHTMLAttributes } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';

// Props type for a single form input field
type FormFieldProps = {
  id: string;
  label: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

// Reusable form field component with label and input
const FormField = ({ id, label, className = '', ...props }: FormFieldProps) => (
  <fieldset className={`w-full space-y-1 ${className}`}>
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} {...props} className="!bg-white" />
  </fieldset>
);

// Define the shape of our form data
type SettingsFormValues = {
  siteName: string;
  supportEmail: string;
  monthlyGoal: number;
};

const WebsiteSettingsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingsFormValues>();

  const onSubmit: SubmitHandler<SettingsFormValues> = (data) => {
    console.log('Form submitted:', data);
  };

  return (
    <section className="rounded-lg border bg-white">
      {/* Header Section */}
      <header className="border-b px-10 py-6">
        <h2 className="text-lg font-semibold">Settings</h2>
        <p>Update your website settings</p>
      </header>

      {/* Settings Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 px-10 py-6">
        {/* Site Name Field */}
        <div className="space-y-1">
          <FormField
            id="siteName"
            label="Site Name"
            type="text"
            placeholder="Enter your site name"
            {...register('siteName', { required: 'Site Name is required' })}
          />
          {errors.siteName && (
            <p className="text-sm text-red-600">{errors.siteName.message}</p>
          )}
        </div>

        {/* Support Email Field */}
        <div className="space-y-1">
          <FormField
            id="supportEmail"
            label="Support Email"
            type="email"
            placeholder="Enter support email"
            {...register('supportEmail', {
              required: 'Support Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Enter a valid email address',
              },
            })}
          />
          {errors.supportEmail && (
            <p className="text-sm text-red-600">
              {errors.supportEmail.message}
            </p>
          )}
        </div>

        {/* Monthly Goal Field */}
        <div className="space-y-1">
          <FormField
            id="monthlyGoal"
            label="Monthly Order Goal"
            type="number"
            placeholder="Enter monthly order goal"
            {...register('monthlyGoal', {
              required: 'Monthly Goal is required',
              valueAsNumber: true,
              min: { value: 1, message: 'Must be at least 1' },
            })}
          />
          {errors.monthlyGoal && (
            <p className="text-sm text-red-600">{errors.monthlyGoal.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button type="submit">Save Changes</Button>
      </form>
    </section>
  );
};

export default WebsiteSettingsForm;
