import { useState, useEffect } from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState(
    typeof window === 'undefined' ? 'light' : window.__theme
  );

  useEffect(() => {
    const listener = () => {
      setTheme(window.__theme);
    };
    document.addEventListener('themechange', listener);
    return () => {
      document.removeEventListener('themechange', listener);
    };
  });

  return theme;
}
