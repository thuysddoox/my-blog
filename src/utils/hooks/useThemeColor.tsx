import { useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

const useThemeColor = () => {
  const { getLocalStorage } = useLocalStorage();
  const [theme, setTheme] = useState<string>(getLocalStorage('theme') ?? 'light');

  useEffect(() => {
    if (theme === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('color-scheme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.documentElement.setAttribute('color-scheme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  return {
    theme,
    setTheme,
  };
};

export default useThemeColor;
