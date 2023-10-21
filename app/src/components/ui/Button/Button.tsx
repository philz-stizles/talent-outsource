import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { Size } from '../../../types';
import { DotPulse } from '@uiball/loaders';

type Variant =
  | 'white'
  | 'green'
  | 'purple'
  | 'lightPurple'
  | 'red'
  | 'flat'
  | 'outlined';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  className?: string;
  size?: Size;
  isHoverable?: boolean;
  variant?: Variant;
  outlined?: boolean;
  iconRight?: any;
  iconLeft?: any;
  expanded?: boolean;
  isLoading?: boolean;
};

const SIZE = {
  sm: 'h-8 px-2.5 text-sm xs:px-4',
  md: 'h-10 px-5 text-sm xs:px-8', // px-5 py-2.
  lg: 'h-12 px-5 text-lg',
};

const Button = ({
  children,
  className,
  label,
  size = 'md',
  isHoverable = true,
  variant = 'purple',
  iconLeft: IconLeft,
  iconRight: IconRight,
  expanded = false,
  isLoading,
  type = 'button',
  disabled,
  ...rest
}: PropsWithChildren<Props>) => {
  const sizeClass = SIZE[size];
  const variants: { [key: string]: string } = {
    flat: `border-none`,
    outlined: `border-slate-400 text-slate-700`,
    white: `text-black bg-white`,
    green: `text-white bg-green-600 ${isHoverable && 'hover:bg-green-700'}`,
    purple: `text-white bg-indigo-600 border-indigo-600 ${
      isHoverable && 'hover:bg-indigo-700'
    }`,
    red: `text-white bg-red-600 ${isHoverable && 'hover:bg-red-700'}`,
    lightPurple: `text-indigo-700 bg-indigo-100 ${
      isHoverable && 'hover:bg-indigo-200'
    }`,
  };

  let content = (
    <>
      {IconLeft && <IconLeft />}
      <span> {label || children}</span>
      {IconRight && <IconRight />}
    </>
  );

  if (isLoading) {
    content = <DotPulse size={32} color="#fff" />;
  }
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      {...rest}
      className={classNames(
        sizeClass,
        expanded && 'w-full',
        'flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed font-medium rounded-md border',
        className,
        variants[variant]
      )}
    >
      {content}
    </button>
  );
};

export default Button;
