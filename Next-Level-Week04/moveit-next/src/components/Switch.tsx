import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import SwitchReact from 'react-switch';

export default function Switch() {
  const { theme, setTheme } = useTheme();
  const [isActiveThemeDark, setIsActiveThemeDark] = useState(false);
  const [themeLocalStorage, setThemeLocalStorage] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setThemeLocalStorage(localStorage.getItem('light'));
    }
  }, [theme]);

  function toggleTheme() {
    if (isActiveThemeDark) {
      localStorage.setItem('light', 'light');
      setTheme('light');
      setIsActiveThemeDark(false);
    } else {
      localStorage.setItem('light', 'dark');
      setTheme('dark');
      setIsActiveThemeDark(true);
    }
  }

  return (
    <SwitchReact
      checkedIcon={false}
      uncheckedIcon={false}
      height={10}
      width={40}
      handleDiameter={20}
      checked={themeLocalStorage === 'dark' ? true : false}
      offColor="#666666"
      onColor="#5965e0"
      onHandleColor="#a1a1a1"
      onChange={toggleTheme}      
    />
  );
}
