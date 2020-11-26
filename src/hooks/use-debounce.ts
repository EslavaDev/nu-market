import { useState, useEffect } from 'react';

export const useDebounce = <T = boolean>(value: T, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(!value);
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [value, delay]);

  return debouncedValue;
};
