import {
  IoBagCheckSharp,
  IoLocationSharp,
  IoRocketSharp,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';

type Props = {
  company: any;
};

const CompanyCard = ({ company }: Props) => {
  return (
    <Link
      role="article"
      to={`/companies/${company.slug}`}
      className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 border border-slate-200 shadow-sm"
    >
      <div className="relative h-44 mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img className="object-cover" src={company.imageUrl} alt="" />
        <div className="absolute top-2 left-2 px-1 rounded-md bg-slate-100 text-slate-600 text-sm">
          12 jobs
        </div>
        <div className="absolute left-0 bottom-0 right-0 px-4 py-2 bg-slate-500/50">
          <h2 className="text-white text-lg">{company.name}</h2>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-1.5 text-base">
        <div className="flex items-center gap-2">
          <IoLocationSharp
            size={24}
            className="text-slate-800 bg-slate-200 p-1 rounded-full"
          />
          {company.location}
        </div>
        <div className="flex items-center gap-2">
          <IoRocketSharp
            size={24}
            className="text-slate-800 bg-slate-200 p-1 rounded-full"
          />
          {company.noOfEmployees}
        </div>
        <div className="flex items-center gap-2">
          <IoBagCheckSharp
            size={24}
            className="text-slate-800 bg-slate-200 p-1 rounded-full"
          />
          <span className="font-semibold">{company.jobs} job</span>
        </div>
      </div>
    </Link>
  );
};

export default CompanyCard;
