import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useFetch } from '../../../../../hooks/use-fetch';
import { baseUrl } from '../../../../../utils/constants';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const animatedComponents = makeAnimated();

type Props = {};

const WhatSkills = ({}: Props) => {
  const { data: loadedSkills } = useFetch(`${baseUrl}/api/skills`, []);

  return (
    <>
      <div className="flex flex-col gap-5 py-5">
        <h2 className="text-4xl">
          What skills would you like to see in your new team?
        </h2>
        <p className="text-2xl text-gray-400">
          Select the desired areas of expertise
        </p>
        <Select
          options={options}
          components={animatedComponents}
          styles={{
            control: (provided, state) => ({
              ...provided,
              background: '#fff',
              borderColor: '#9e9e9e',
              borderRadius: '7px',
            }),
            input: (provided, state) => ({
              ...provided,
              paddingTop: '8px',
              paddingBottom: '8px',
            }),
          }}
        />
      </div>
      <div className="flex flex-wrap">
        <div className="border border-gray-400 text-lg font-normal rounded-md py-1 px-3 transition-all cursor-pointer hover:bg-indigo-700 hover:text-white">
          CSS
        </div>
      </div>
      <div className="py-12">
        <h3 className="">
          Popular skills for <strong>Software Developers:</strong>{' '}
        </h3>
        <div className="flex flex-wrap gap-5 py-5">
          <div className="border border-gray-400 text-lg font-normal rounded-md py-1 px-3 transition-all cursor-pointer hover:bg-indigo-700 hover:text-white">
            CSS
          </div>
          <div className="border border-gray-400 text-lg rounded-md py-1 px-3">
            React
          </div>
          <div className="border border-gray-400 text-lg rounded-md py-1 px-3">
            Next
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatSkills;
