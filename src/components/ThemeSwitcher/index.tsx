import { Wrapper } from '@components/Layout';
import { ThemeColorContext, ThemeColorContextIProps } from '@utils/contexts/themeContext';
import useThemeColor from '@utils/hooks/useThemeColor';
import { useContext } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { styled } from 'styled-components';

const ThemeSwitcherWrapper = styled.div<{ mode: string }>`
  position: relative;
  box-shadow: -3px -3px 3px rgba(0,0,0,0.03), 3px 3px 3px rgba(0,0,0,0.2),
    inset 2px 2px 3px var(--shadow-color), inset 2px 2px 20px var(--shadow-color);
  border: 3px solid var(--background-header);
  background: var(--background-header);

  .switch {
    position: absolute;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    transform:  ${({ mode }) => (mode === 'dark' ? 'translate(calc(100% + 8px),-50%)' : 'translate(-2px,-50%)')};
    top: 50%;
    background: ${({ mode }) => (mode === 'dark' ? '#396273' : '#FCF2EB')};
    box-shadow: inset 2px 2px 2px ${({ mode }) => (mode === 'dark' ? 'var(--light)' : 'var(--background-header)')},
      5px 6px 6px var(--shadow-color);
    transition: transform 0.3s, background-color 0.1s ease;
  }
  .sun,.moon{
    position: relative;
    border-radius: 50%;
    z-index: 9;
  }
}`;

const ThemeSwitcher = ({ className }: { className?: string }) => {
  const { theme, setTheme } = useThemeColor();
  const { setThemeApp } = useContext(ThemeColorContext) as ThemeColorContextIProps;
  const handleChangeMode = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
    theme === 'dark' ? setThemeApp?.('light') : setThemeApp?.('dark');
  };
  return (
    <ThemeSwitcherWrapper mode={theme} className={`${className} flex p-2 rounded-[28px] border-2 border-black w-max`}>
      <div className="switch"></div>
      <Wrapper className={`${theme !== 'dark' ? 'active' : ''} p-[6px] mr-2 cursor-pointer sun`}>
        <BsFillSunFill onClick={handleChangeMode} color={theme !== 'dark' ? '#EFB099' : '#8DC4D1'} />
      </Wrapper>
      <Wrapper className={`${theme === 'dark' ? 'active' : ''} p-[6px] ml-2 cursor-pointer moon`}>
        <BsFillMoonFill onClick={handleChangeMode} color={theme !== 'dark' ? '#D6C2B5' : '#fff'} />
      </Wrapper>
    </ThemeSwitcherWrapper>
  );
};

export default ThemeSwitcher;
