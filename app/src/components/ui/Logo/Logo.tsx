import classNames from 'classnames';
import { KanbanSquareDashed } from 'lucide-react';
import { Link } from 'react-router-dom';

type Props = {
  className?: string;
  iconOnly?: boolean;
};

const Logo = ({ className, iconOnly }: Props) => {
  return (
    <Link
      className={classNames(
        'text-lg font-medium flex items-center gap-1',
        className
      )}
      to="/"
    >
      <KanbanSquareDashed size={32} className="text-indigo-400" />
      {!iconOnly && (
        <div>
          <span className="font-bold">Talent</span>
          <span className="font-light text-indigo-400">Source.</span>
        </div>
      )}
    </Link>
  );
};

export default Logo;
