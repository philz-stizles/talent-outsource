import { inputStyles } from '../Input/Input';

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  textarea?: boolean;
  error?: string;
  isValid?: boolean;
  isTouched?: boolean;
  info?: string;
}

const TextArea = ({
  label,
  placeholder,
  textarea = false,
  isValid = false,
  isTouched = false,
  autoCapitalize = 'none',
  autoCorrect = 'off',
  info,
  ...rest
}: TextAreaProps) => {
  return (
    <div className="relative flex flex-col w-full mb-2">
      {/* {label && <label className="sr-only font-semibold mb-1">{label}</label>} */}
      {label && <label className="mb-1 text-base">{label}</label>}
      <textarea
        className={inputStyles}
        placeholder={placeholder}
        rows={5}
        {...rest}
      ></textarea>
      {info && <small className="text-xs text-slate-500 mt-1">{info}</small>}
    </div>
  );
};

export default TextArea;
