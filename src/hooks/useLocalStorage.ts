'use client';
import { useState, useEffect } from 'react';

export function useLocalStorage<T>(
  key: string,
  defaultValue: T,
): [T, (value: T | ((prevState: T) => T)) => void] {
  const [value, setValue] = useState<T>(defaultValue);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const item = window.localStorage.getItem(key);
      setValue(item ? JSON.parse(item) : defaultValue);
    } catch (error) {
      console.error('Error occurred while getting localtorage', error);
      setValue(defaultValue);
    }
  }, [key]);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [value, key, isMounted]);

  return [value, setValue];
}
