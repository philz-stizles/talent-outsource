import { Calendar, User } from 'lucide-react';

export type Blog = {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  author: {
    name: string;
  };
  createdAt: string;
};

type Props = {
  item: Blog;
};

const BlogCard = ({
  item: { title, imageUrl, category, author, createdAt },
}: Props) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden">
      <figure className="overflow-hidden">
        <img className="w-full h-auto" src={imageUrl} alt={title} />
      </figure>
      <div className="p-4">
        <div className='mb-1'>
          <span className="text-sm text-slate-600 font-light bg-slate-100 rounded-md p-1">
            {category}
          </span>
        </div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <div className="flex justify-between items-start text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <User size={18} /> <span>by {author?.name}</span>
          </div>
          <span className='flex items-center gap-2'>
            <Calendar size={18} />
            <span>{createdAt}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
