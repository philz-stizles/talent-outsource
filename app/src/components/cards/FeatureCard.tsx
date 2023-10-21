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

const FeatureCard = ({ item: { title, icon: Icon, description } }: Props) => {
  return (
    <div className="bg-white flex flex-col items-start gap-3 rounded-lg px-6 py-8 border border-slate-200 shadow-sm first-of-type:bg-slate-950 first-of-type:[&>.icon]:bg-slate-50">
      <div className="p-2 bg-slate-950 rounded-full inline-block">
        <Icon className="text-slate-100" strokeWidth={1.5} size={36} />
      </div>
      <h2 className="text-lg font-bold text-slate-800">{title}</h2>
      <p className="text-lg font-light text-slate-700">{description}</p>
    </div>
  );
};

export default FeatureCard;
