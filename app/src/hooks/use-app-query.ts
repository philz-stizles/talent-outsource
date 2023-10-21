import { useQuery } from '@tanstack/react-query';

const queryFn = async (url: string) => {
  try {
    const response = await fetch('');
    if (!response.ok) {
      const error = new Error('An error occurred while fetching the events');
      // error.code = response.status;
      // error.info = await response.json();
      throw error;
    }

    return await response.json();
  } catch (error) {
    throw new Error('An error occurred while fetching the events');
  }
};

const useAppQuery = ({
  url,
  queryKey,
  staleTime,
  cacheTime,
}: {
  url: string;
  queryKey: any;
  staleTime?: number;
  cacheTime?: number;
}) => {
  const { data, error } = useQuery({ queryKey, queryFn: queryFn.bind(this, url), staleTime, cacheTime });

  return { data, error };
};

export default useAppQuery;
