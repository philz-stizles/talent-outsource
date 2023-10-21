import { IconType } from 'react-icons';

type CategoryInputProps = {
  label: string;
  icon: IconType;
  isSelected?: boolean;
  onClick: (value: string) => void;
};

const CategoryInput: React.FC<CategoryInputProps> = ({
  label,
  icon: Icon,
  isSelected,
  onClick,
}) => {
  return (
    <div
      className={`p-4 flex flex-col gap-3 rounded-xl border-2 hover:border-black cursor-pointer transition
      ${isSelected ? 'border-black' : 'border-neutral-200'}`}
      onClick={() => onClick(label)}
    >
      <Icon size={30} />
      <div className="font-semibold">{label}</div>
    </div>
  );
};

export default CategoryInput;
