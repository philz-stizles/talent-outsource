import qs from 'query-string';
import { useLocation } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { useMemo } from 'react';
import { differenceInDays } from 'date-fns';
import useCountries from '../../../hooks/use-countries';
import { ReadOnlyURLSearchParams } from '../../../types';

const Search = () => {
  const { getByValue } = useCountries();
  const { search } = useLocation();
  const searchParams = useMemo(
    () => new URLSearchParams(search) as ReadOnlyURLSearchParams,
    [search]
  );
  const locationValue = searchParams?.get('locationValue');
  const startDate = searchParams?.get('startDate');
  const endDate = searchParams?.get('endDate');
  const guestCount = searchParams?.get('guestCount');

  const locationLabel = useMemo(() => {
    return locationValue
      ? getByValue(locationValue as string)?.label
      : 'Anywhere';
  }, [locationValue, getByValue]);

  const durationLabel = useMemo(() => {
    let diff = 0;
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      diff = differenceInDays(end, start);
    }

    return diff === 0 ? 1 : `${diff} Days`;
  }, [endDate, startDate]);

  const guestLabel = useMemo(() => {
    return guestCount ? `${guestCount} Guests` : 'Add Guests';
  }, [guestCount]);

  return (
    <div
      onClick={() => {}}
      className="w-full md:w-auto py-2 shadow-sm hover:shadow-md rounded-full cursor-pointer transition border-[1px]"
    >
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">{locationLabel}</div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
          {durationLabel}
        </div>
        <div className="text-sm text-gray-600 pl-6 pr-2 flex flex-row items-center gap-3">
          <div className="hidden md:block">{guestLabel}</div>
          <div className="bg-rose-500 p-2 rounded-full text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
