import React from 'react';

type Props = {
  src: string;
};

const Avatar = ({ src }: Props) => {
  return (
    <img
      className="h-9 w-9 rounded-full border-[3px] border-[#fdf2e9] -mr-3"
      src={src}
      alt="Avatar"
    />
  );
};

export default Avatar;
