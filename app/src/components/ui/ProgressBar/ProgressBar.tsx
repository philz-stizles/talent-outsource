'use client';

import { twMerge } from 'tailwind-merge';

type Props = { title: string; percent: number };

const ProgressBar = ({ title, percent }: Props) => {
  const calculatedPercent = Math.floor((percent / 100) * 12);
  console.log(calculatedPercent);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h4 className="uppercase text-sm font-black mb-2">{title}</h4>
        <span>{percent}%</span>
      </div>
      <div className="relative h-1 w-full bg-gray-300 transition">
        <div
          className={twMerge(
            'absolute top-0 left-0 bottom-0 bg-black',
            `w-${calculatedPercent}/12`
          )}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
