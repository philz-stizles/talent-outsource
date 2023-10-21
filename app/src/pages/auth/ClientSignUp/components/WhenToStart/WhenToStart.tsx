import { Users } from 'lucide-react';
import { SelectCard } from '../../../../../components/cards';

const WhenToStart = () => {
  return (
    <>
      <div className="flex flex-col gap-5 py-5">
        <h2 className="text-4xl">When do you need the developer to start?</h2>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <SelectCard label="One engineer" icon={Users} />
        <SelectCard label="A small team" icon={Users} />
        <SelectCard label="A medium team" icon={Users} />
        <SelectCard label="A large team" icon={Users} />
      </div>
    </>
  );
};

export default WhenToStart;
