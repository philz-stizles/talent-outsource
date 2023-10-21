import { LucideIcon } from 'lucide-react';

type Props = {
  id?: string;
  icon: LucideIcon;
  title: string;
  description?: string;
  iconColor?: string;
};

const ActivityCard = ({ title, icon: Icon, description, iconColor }: Props) => {
  return (
    <div className="bg-white rounded-md border border-slate-200 p-4 shadow-md">
      <div className={`p-1 mb-2${iconColor ? ` ${iconColor}` : ''} rounded-full inline-block`}>
        <Icon strokeWidth={2} size={24} />
      </div>
      <h2 className="text-sm font-bold mb-1">{title}</h2>
      <p className="text-sm font-light text-slate-600">{description}</p>
    </div>
  );
};

export default ActivityCard;
