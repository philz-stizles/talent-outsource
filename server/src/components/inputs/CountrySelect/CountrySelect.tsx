import useCountries from '../../../hooks/use-countries
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

export type CountrySelectValue = {
  value: string;
  label: string;
  flag: string;
  latlng: number[];
  region: string;
};

export type CountrySelectProps = {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
};

const animatedComponents = makeAnimated();

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  const { getAll } = useCountries();
  return (
    <div>
      <Select
        isMulti
        options={getAll()}
        components={animatedComponents}
        styles={{
          control: (provided, state) => ({
            ...provided,
            // background: '#fff',
            // borderColor: '#9e9e9e',
            // borderRadius: '7px',
            paddingTop: '0px',
            paddingBottom: '0px',
          }),
          // input: (provided, state) => ({
          //   ...provided,
          //   paddingTop: '8px',
          //   paddingBottom: '8px',
          // }),
        }}
        placeholder="Anywhere"
        isClearable
        value={value}
        onChange={value => onChange(value as any)}
        formatOptionLabel={(option: any) => (
          <div className="flex flex-row items-center gap-3">
            <div>{option.flag}</div>
            <div>
              {option.label}
              <span className="text-neutral-500 ml-1">{option.region}</span>
            </div>
          </div>
        )}
        classNames={{
          control: () => 'p-3 border-2',
          input: () => 'text-lg',
          option: () => 'text-lg',
        }}
        theme={theme => ({
          ...theme,
          borderRadius: 6,
          colors: { ...theme.colors, primary: 'black', primary25: '#ffe4e6' },
        })}
      />
    </div>
  );
};

export default CountrySelect;
