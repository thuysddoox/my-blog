import useThemeColor from '@utils/hooks/useThemeColor';
import React, { useEffect, useState } from 'react';
export type ThemeColorContextIProps = {
  themeApp: string;
  setThemeApp?: React.Dispatch<React.SetStateAction<string>>;
};
export const ThemeColorContext = React.createContext<ThemeColorContextIProps>({
  themeApp: 'light',
});

const ThemeProvider = ({ children }: { children: any }) => {
  const { theme, setTheme } = useThemeColor()
  const [themeApp, setThemeApp] = useState<string>(theme);
  useEffect(() => {
    setThemeApp(theme)
  }, [])

  useEffect(() => {
    setTheme(themeApp)
  }, [themeApp])
  
  return <ThemeColorContext.Provider value={{ themeApp, setThemeApp }}>{children}</ThemeColorContext.Provider>;
};

export default ThemeProvider;
