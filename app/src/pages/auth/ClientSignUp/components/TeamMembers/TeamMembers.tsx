import { IoPeople } from 'react-icons/io5';
import { SelectCard } from '../../../../../components/cards';
import { Users } from 'lucide-react';

type Props = {};

const TeamMembers = (props: Props) => {
  return (
    <>
      <div className="flex flex-col gap-5 py-5">
        <h2 className="text-4xl">How many team members do you require?</h2>
      </div>
      <div className="grid grid-cols-4 gap-4 py-4">
        <SelectCard label="One Engineer" icon={Users} />
        <SelectCard label="One Engineer" icon={Users} />
        <SelectCard label="One Engineer" icon={Users} />
        <SelectCard label="One Engineer" icon={Users} />
      </div>
    </>
  );
};

export default TeamMembers;
