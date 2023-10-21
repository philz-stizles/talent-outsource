import { Briefcase, FolderGit2, GraduationCap, Network } from 'lucide-react';
import MenuBar from '../../../components/shared/MenuBar/MenuBar';
import ProfileCard from './components/CardWrapper/CardWrapper';
import ExperienceCard from './components/ExperienceCard';
import EducationCard from './components/EducationCard';
import ProjectCard from './components/ProjectCard';

const Profile = () => {
  return (
    <>
      <MenuBar />
      <main className="bg-background grid lg:grid-cols-5">
        <div className="pb-12 hidden lg:block">
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                Discover
              </h2>
              <div className="space-y-1">
                <button className="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2 w-full justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                  </svg>
                  General
                </button>
                <button className="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                    <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                    <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                    <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                  </svg>
                  Professional Overview
                </button>
                <AsideItem label="Social Networks" icon={Network} />
                <AsideItem label="Experience" icon={Briefcase} />
                <AsideItem label="Education" icon={GraduationCap} />
                <AsideItem label="Projects" icon={FolderGit2} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-4 lg:border-l overflow-auto">
          <div className="px-4 py-6 lg:px-8">
            <div className="grid gap-6">
              <ProfileCard
                title="General"
                description="Add a new payment method to your account."
              />
              <ProfileCard
                title="Professional Overview"
                description="Add a new payment method to your account."
              />
              <ProfileCard
                title="Social networks"
                description="Add a new payment method to your account."
              />
              <ExperienceCard
                title="Experience"
                description="Add a new payment method to your account."
              />
              <EducationCard
                title="Education"
                description="Add a new payment method to your account."
              />
              <ProjectCard
                title="Projects"
                description="Add a new payment method to your account."
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

const AsideItem: React.FC<{ label: string; icon: any }> = ({
  label,
  icon: Icon,
}) => {
  return (
    <button className="inline-flex items-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start">
      <Icon size={18} />
      <span className="inline-flex">{label}</span>
    </button>
  );
};

export default Profile;
