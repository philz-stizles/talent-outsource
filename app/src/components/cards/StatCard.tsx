import { LucideIcon } from 'lucide-react';

export type Feature = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

type Props = {
  item: Feature;
};

const StatCard = ({ item: { title, icon: Icon, description } }: Props) => {
  return (
    <div className="bg-slate-50 rounded-lg p-4">
      <div className="p-2 mb-2 bg-white rounded-md inline-block">
        <Icon strokeWidth={2} size={36} />
      </div>
      <h2 className="text-base font-bold mb-1">{title}</h2>
      <p className="text-sm font-light text-slate-600">{description}</p>
    </div>
  );
};

export default StatCard;
