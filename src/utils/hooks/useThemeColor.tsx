import { useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

const useThemeColor = () => {
  const { getLocalStorage, saveLocalStorage } = useLocalStorage();
  const storedTheme = getLocalStorage('theme');
  const [theme, setTheme] = useState<string>( storedTheme ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));


  useEffect(() => {
    if (theme === 'dark') {
      saveLocalStorage('theme', 'dark');
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('color-scheme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.documentElement.setAttribute('color-scheme', 'light');
      saveLocalStorage('theme', 'light');
    }
  }, [theme]);

  useEffect(
    () => {
      const _theme = getLocalStorage('theme');

      if(_theme) {setTheme(_theme); return;}

      if (!_theme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        saveLocalStorage('theme', 'dark');
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('color-scheme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        document.documentElement.setAttribute('color-scheme', 'light');
        saveLocalStorage('theme', 'light');
      }
    }, []
  )

  return {
    theme,
    setTheme,
  };
};

export default useThemeColor;
