import { Input } from '@/components/ui/input';


const Settings = () => {
  return (
    <div className="rounded-[8px] border bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b px-10 py-6">
        <h2 className="text-lg font-semibold">Settnigs</h2>
      </div>
      <div className="">
        <Input type="text" placeholder="Search customers" className="pl-9" />
        <Input type="text" placeholder="Search customers" className="pl-9" />
        <Input type="text" placeholder="Search customers" className="pl-9" />
      </div>
    </div>
  );
};

export default Settings;
