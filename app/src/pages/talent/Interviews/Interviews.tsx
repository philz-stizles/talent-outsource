import { NavLink } from 'react-router-dom';
import { IconButton, Logo } from '../../../components/ui';
import {
  Cog,
  CogIcon,
  Info,
  Lightbulb,
  LogOut,
  MessageSquare,
  Settings,
} from 'lucide-react';
import ActivityCard from '../../../components/cards/ActivityCard';
import { useAuth } from '../../../context/auth-context';

const Interviews = () => {
  const { logout } = useAuth();

  return (
    <main className="flex-1 flex flex-col">
      <div className="flex items-center gap-14 bg-slate-950 text-slate-100 text-sm font-normal px-8 py-3">
        <Logo />
        <nav className="flex-1">
          <ul className="flex items-center gap-5">
            <li>
              <NavLink to="">Interviews</NavLink>
            </li>

            <li>
              <NavLink to="">Find a Job</NavLink>
            </li>

            <li>
              <NavLink to="">Jobs</NavLink>
            </li>
            <li>
              <NavLink to="">Profile</NavLink>
            </li>
            <li>
              <NavLink to="">Community</NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-1">
          <IconButton icon={MessageSquare} />
          <IconButton icon={Info} />
          <IconButton icon={Settings} />
          <IconButton icon={LogOut} onClick={() => logout()} />
        </div>
      </div>
      <div className="bg-slate-950 text-slate-100 py-8">
        <div className="w-11/12 mx-auto">
          <h2 className="font-semibold">Interviews</h2>
        </div>
      </div>
      <div className="bg-slate-50 py-8 flex-1">
        <div className="w-11/12 mx-auto grid grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <ActivityCard
              iconColor="bg-rose-100"
              title="React Technical Interview"
              icon={Lightbulb}
            />
            <ActivityCard
              iconColor="bg-green-100"
              title="React Technical Interview"
              icon={Lightbulb}
            />
            <ActivityCard
              iconColor="bg-yellow-100"
              title="React Technical Interview"
              icon={Lightbulb}
            />
            <ActivityCard
              iconColor="bg-indigo-100"
              title="React Technical Interview"
              icon={Lightbulb}
            />
          </div>
          <div></div>
        </div>
      </div>
    </main>
  );
};

export default Interviews;
