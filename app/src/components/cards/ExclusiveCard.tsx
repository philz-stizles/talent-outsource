import classNames from 'classnames';

type Props = {
  item: {
    id: string;
    name: string;
    imageUrl: string;
  };
};

const ExclusiveCard = ({ item: { name, imageUrl } }: Props) => {
  return (
    <div
      className={classNames(
        'relative overflow-hidden rounded-lg w-[320px] h-[280px]'
      )}
    >
      <img className="w-full h-full object-cover" src={imageUrl} alt={name} />
    </div>
  );
};

export default ExclusiveCard;
