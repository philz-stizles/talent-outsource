import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

type CounterProps = {
  title: string;
  subTitle: string;
  value: number;
  onChange: (value: number) => void;
};

const Counter: React.FC<CounterProps> = ({
  title,
  subTitle,
  value,
  onChange,
}) => {
  const addHandler = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const reduceHandler = useCallback(() => {
    if (value === 1) {
      return;
    }
    onChange(value - 1);
  }, [onChange, value]);

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <div className="font-medium">{title}</div>
        <div className="font-light text-gray-600">{subTitle}</div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div
          className="w-10 h-10 flex justify-center items-center rounded-full border-[1px] border-neutral-400 text-neutral-500 cursor-pointer transition hover:opacity-80"
          onClick={reduceHandler}
        >
          <AiOutlineMinus />
        </div>
        <div className="font-light text-xl text-neutral-600">{value}</div>
        <div
          className="w-10 h-10 flex justify-center items-center rounded-full border-[1px] border-neutral-400 text-neutral-500 cursor-pointer transition hover:opacity-80"
          onClick={addHandler}
        >
          <AiOutlinePlus />
        </div>
      </div>
    </div>
  );
};

export default Counter;
