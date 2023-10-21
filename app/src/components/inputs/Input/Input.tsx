import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

type InputProps = {
  id: string;
  label?: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
};

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  required,
  register,
  errors,
}) => {
  return (
    <div className="relative w-full">
      {formatPrice && (
        <BiDollar
          size={24}
          className="absolute text-neutral-700 top-5 left-2"
        />
      )}

      <input
        className={`peer w-full p-4 pt-6 font-light border-2 rounded-md outline-none disabled:opacity-70 disabled:cursor-not-allowed transition
        ${formatPrice ? "pl-9" : "pl-4"}
        ${errors[id] ? "border-rose-500" : "border-neutral-300"}
        ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}`}
        type={type}
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=""
      />
      {label && (
        <label
          className={`absolute top-5 z-10 text-md transform -translate-y-3 duration-150 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4
      ${formatPrice ? "left-9" : "left-4"}
      ${errors[id] ? "text-rose-500" : "text-zinc-500"}`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Input;
