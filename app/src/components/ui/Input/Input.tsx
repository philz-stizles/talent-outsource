interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  isValid?: boolean;
  isTouched?: boolean;
  info?: string;
}

export const inputStyles =
  'border border-slate-400 font-light px-4 py-2.5 text-sm rounded-md transition hover:border-slate-700 focus:border-slate-700 bg-slate-50';

const Input = ({
  label,
  type = 'text',
  placeholder,
  isValid = false,
  isTouched = false,
  autoCapitalize = 'none',
  autoCorrect = 'off',
  info,
  onChange,
  ...rest
}: InputProps) => {
  return (
    <div className="relative flex flex-col w-full mb-2">
      {/* {label && <label className="sr-only font-semibold mb-1">{label}</label>} */}
      {label && <label className="mb-1 text-base">{label}</label>}
      <input
        className={inputStyles}
        type={type}
        placeholder={placeholder}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        onChange={onChange}
        {...rest}
      />
      {info && <small className="text-xs text-slate-500 mt-1">{info}</small>}
    </div>
  );
};

export default Input;
