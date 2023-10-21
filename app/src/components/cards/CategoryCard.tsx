import classNames from 'classnames';
import IconButton from '../ui/IconButton/IconButton';
import { ArrowUpRight, Play } from 'lucide-react';

export type Category = {
  id: string;
  name: string;
  imageUrl: string;
  productCount: number;
};

type Props = {
  item: Category;
  index: number;
};

const CategoryCard = ({
  item: { name, imageUrl, productCount },
  index,
}: Props) => {
  return (
    <div
      className={classNames(
        'relative flex overflow-hidden rounded-lg',
        index === 2 && 'col-span-2 row-span-2',
        index === 3 && 'col-span-2'
      )}
    >
      <img className="w-full h-auto object-cover" src={imageUrl} alt={name} />

      <div className="absolute left-0 bottom-0 right-0 p-2 flex justify-between items-end text-white">
        <div>
          <h2 className="mt-4 font-semibold">{name}</h2>
          <p className="text-sm font-normal">{productCount}+ items</p>
        </div>
        <div className="rounded-full bg-white text-slate-950 shadow-md p-1">
          <ArrowUpRight size={18} strokeWidth={3} />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
