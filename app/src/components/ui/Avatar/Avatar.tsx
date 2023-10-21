import classNames from 'classnames';

type Props = {
  imageUrl?: string;
  className?: string;
};

const Avatar = ({ imageUrl, className }: Props) => {
  return (
    <figure
      className={classNames(
        'border-4 border-white rounded-full overflow-hidden w-12 h-12 shadow-lg',
        className
      )}
    >
      <img
        className="w-full h-auto"
        src={imageUrl || '/images/placeholder.jpg'}
        alt=""
      />
    </figure>
  );
};

export default Avatar;
