import { Star } from 'lucide-react';
import { Button } from '../ui';

export type Product = {
  id: string;
  name: string;
  rating?: number;
  price: string;
  imageUrl: string;
  category: string;
};

type Props = {
  item: Product;
};

const DealCard = ({
  item: { name, category, imageUrl, rating, price },
}: Props) => {
  return (
    <div className="p-3 grid grid-cols-2 rounded-md shadow-sm border border-slate-200">
      <figure className="relative flex overflow-hidden aspect-square">
        <img className="w-full h-full rounded-md" src={imageUrl} alt={name} />
      </figure>
      <div className="p-5 flex flex-col justify-center items-start">
        <h2 className="mb-1 font-bold">{name}</h2>
        <p className="font-bold mb-2">{price}</p>
        <div className="flex items-center gap-1 bg-white rounded-md text-sm">
          <Star className="text-yellow-600" size={16} />
          <span className=' font-semibold'>{rating}</span> <span className=''>(40 reviews)</span>
        </div>
        <p className="mb-6"></p>
        <p className=" text-sm text-slate-500 mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus,
          quibusdam voluptas.
        </p>
        <Button label="Buy Now" />
      </div>
    </div>
  );
};

export default DealCard;
