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
  const {theme} = useThemeColor()
  const [themeApp, setThemeApp] = useState<string>('light');
  useEffect(()=>{setThemeApp(theme)},[theme])
  return <ThemeColorContext.Provider value={{ themeApp, setThemeApp }}>{children}</ThemeColorContext.Provider>;
};

export default ThemeProvider;
