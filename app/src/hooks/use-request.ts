import { useState, useEffect } from 'react';

export const useFetch = <T>(url: string, defaultValue: T) => {
  const [data, setData] = useState<T>(defaultValue);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('');
        const result = await response.json();
        if (result && result.status && result.data) {
          setData(result.data);
        } else {
          throw new Error('Something went wrong');
        }
      } catch (error: any) {
        setError(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};
