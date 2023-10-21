import { Star } from 'lucide-react';
import { IoLocation } from 'react-icons/io5';

type JobType = 'Remote' | 'Onsite' | 'Hybrid';

export type Job = {
  id: string;
  title: string;
  type: JobType;
  rating?: number;
  location: string;
  category: string;
  createdAt: string;
};

type Props = {
  item: Job;
};

const JobCard = ({
  item: { title, category, rating, location, type, createdAt },
}: Props) => {
  return (
    <div className="p-7 bg-white rounded-lg shadow-sm  flex flex-col gap-3 overflow-hidden">
      <div className="flex justify-between items-center">
        <div className="text-xs flex items-center gap-1 text-slate-400">
          <IoLocation size={16} />
          {location}
        </div>
        <div className="text-xs rounded-md p-1 bg-green-100 text-green-900">{type}</div>
      </div>
      <div className="flex-1">
        <h3 className="font-bold">{title}</h3>
      </div>
      <div>
        <small className=" font-normal text-slate-600">Devdezyn Inc</small>
      </div>
    </div>
  );
};

export default JobCard;
