import { LucideIcon } from 'lucide-react';

type Props = {
  id?: string;
  icon: any;
  label: string;
  description?: string;
  iconColor?: string;
};

const ActivityCard = ({ label, icon: Icon, description, iconColor }: Props) => {
  return (
    <div className="bg-white rounded-md border border-slate-200 p-6 shadow-md text-center cursor-pointer aspect-video">
      <div
        className={`p-1 mb-0${
          iconColor ? ` ${iconColor}` : ''
        } rounded-full inline-block`}
      >
        <Icon strokeWidth={2} size={42} />
      </div>
      <h4 className="mb-1">{label}</h4>
      {description && (
        <p className="text-sm font-light text-slate-600">{description}</p>
      )}
    </div>
  );
};

export default ActivityCard;
