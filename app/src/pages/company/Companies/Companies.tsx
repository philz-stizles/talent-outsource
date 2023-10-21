import { CompassIcon, Map } from 'lucide-react';
import MenuBar from '../../../components/shared/MenuBar/MenuBar';
import { BsPersonWorkspace } from 'react-icons/bs';
import { IoLocationSharp, IoSearchSharp } from 'react-icons/io5';
import { SearchResult } from './components';

const Companies = () => {
  return (
    <div className="bg-slate-50">
      <div className="bg-slate-950 text-slate-100 hidden flex-col md:flex">
        <MenuBar />
        <div className="w-11/12 mx-auto flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2 mb-6">
            <h2 className="text-xl font-bold tracking-tight">
              Home {`>`} Companies
            </h2>
          </div>
          {/* <div className="flex items-center gap-4">
            <div className="flex-1 relative rounded-xl h-[75px] flex items-center gap-2 bg-slate-700 py-2 px-4">
              <input
                className="flex-1 w-full h-full text-white font-bold text-4xl text-ellipsis bg-transparent border-none "
                type="search"
                placeholder="Angular, Node, MERN ..."
              />
              <IoSearchSharp size={42} />
            </div>
            <div className="flex-1 relative rounded-xl h-[75px] flex items-center flex-row-reverse gap-2 bg-slate-700 py-2 px-4">
              <input
                className="flex-1 w-full h-full text-white font-bold text-4xl text-ellipsis bg-transparent border-none"
                type="search"
                placeholder="Where?"
              />
              <IoLocationSharp size={42} />
            </div>
            <button className="flex flex-col justify-center items-center gap-1 h-[75px] py-2 px-6 rounded-lg bg-slate-700 text-sm">
              <BsPersonWorkspace size={24} />
              <span>Remote</span>
            </button>
            <button className="flex flex-col justify-center items-center gap-1 h-[75px] py-2 px-8 rounded-lg bg-slate-700 text-sm">
              <Map size={24} />
              <span>Map</span>
            </button>
            <button className="flex flex-col justify-center items-center gap-1 h-[75px] py-2 px-8 rounded-lg bg-white text-sm">
              <CompassIcon className="text-slate-800" />
              <span className="text-slate-800">Top 20</span>
            </button>
          </div> */}
        </div>
      </div>
      <section className="p-8">
        <SearchResult />
      </section>
    </div>
  );
};

export default Companies;
