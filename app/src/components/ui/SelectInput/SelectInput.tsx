import Select from 'react-select';
import makeAnimated from 'react-select/animated';

type Props = {
  isMulti?: boolean;
  label?: string;
  options: any[];
  value: any;
  onChange: (value: any) => void;
};

const animatedComponents = makeAnimated();

const SelectInput = ({
  isMulti = false,
  label,
  options,
  value,
  onChange,
}: Props) => {
  return (
    <div className="relative flex flex-col w-full mb-2">
      {label && <label className="mb-1 text-base">{label}</label>}
      <Select
        isMulti={isMulti}
        options={options}
        components={animatedComponents}
        styles={{
          control: (provided, state) => ({
            ...provided,
            background: '#fff',
            borderColor: '#9e9e9e',
            borderRadius: '7px',
            paddingLeft: '6px',
            paddingTop: '0px',
            paddingBottom: '0px',
          }),
          input: (provided, state) => ({
            ...provided,
            paddingLeft: '6px',
            paddingTop: '5px',
            paddingBottom: '5px',
          }),
        }}
        placeholder="E.g Front-end Developer ..."
        isClearable
        value={value}
        onChange={(value) => onChange(value as any)}
        formatOptionLabel={(option: any) => (
          <div className="flex flex-row items-center gap-3">
            <div>{option.icon}</div>
            <div>
              {option.label}
              {/* <span className="text-neutral-500 ml-1">
                      {option.region}
                    </span> */}
            </div>
          </div>
        )}
        classNames={{
          control: () => 'p-3 border-2',
          // input: () => 'py-2',
          option: () => 'text-sm',
          placeholder: () => 'text-sm',
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: 'black',
            primary25: 'rgba(99,102,241,0.1)',
          },
        })}
      />
    </div>
  );
};

export default SelectInput;
