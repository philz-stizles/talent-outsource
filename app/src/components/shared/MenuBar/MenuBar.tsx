import { NavLink, useLocation } from 'react-router-dom';
import { Info, LogOut, MessageSquare, Settings } from 'lucide-react';
import { IconButton, Logo } from '../../ui';
import { useAuth } from '../../../context/auth-context';
import { RoleType } from '../../../types';
import classNames from 'classnames';

const talentLinks = [
  { name: 'Overview', to: '/talent' },
  { name: 'Find a Job', to: '/talent/find-job' },
  { name: 'My Jobs', to: '/talent/my-jobs' },
  { name: 'Quizzes', to: '/talent/quizzes' },
  { name: 'Coding Challenges', to: '/talent/coding-challenges' },
  { name: 'Community', to: '/talent/community' },
  { name: 'Profile', to: '/talent/profile' },
];
const adminLinks = [
  { name: 'Overview', to: '/admin' },
  { name: 'Companies', to: '/admin/companies' },
  { name: 'Talents', to: '/admin/talents' },
  { name: 'Tech Stacks', to: '/admin/tech-stacks' },
  { name: 'Technologies', to: '/admin/technologies' },
  { name: 'Quizzes', to: '/admin/quizzes' },
];
const companyLinks = [{ name: 'Overview', to: '' }];

const MenuBar = () => {
  const { user, logout } = useAuth();
  const { pathname } = useLocation();

  const links =
    user?.role === RoleType.ADMIN
      ? adminLinks
      : user?.role === RoleType.COMPANY
      ? companyLinks
      : talentLinks;

  return (
    <div className="bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="flex h-16 items-center gap-8 px-4">
        <Logo iconOnly />
        <nav className="flex-1 flex items-center gap-2 lg:gap-6">
          {links.map(({ name, to }) => (
            <NavLink
              key={name}
              className={classNames(
                'text-base font-medium transition-colors hover:text-primary rounded-md px-2',
                pathname === to && 'bg-slate-800'
              )}
              to={to}
            >
              {name}
            </NavLink>
          ))}
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <IconButton icon={MessageSquare} />
          <IconButton icon={Info} />
          <IconButton icon={Settings} />
          <IconButton icon={LogOut} onClick={() => logout()} />
          {/* <button
              className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 w-8 rounded-full"
              type="button"
              id="radix-:rrb:"
              aria-haspopup="menu"
              aria-expanded="false"
              data-state="closed"
            >
              <span className="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8">
                <img
                  className="aspect-square h-full w-full"
                  alt="@shadcn"
                  src="/avatars/01.png"
                />
              </span>
            </button> */}
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
