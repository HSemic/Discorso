import React, { useEffect, useState, createContext } from 'react';

interface IThemeContext {
  isDarkThemeEnabled: boolean;
  toggleTheme?: () => void;
}

const ThemeContext = createContext<IThemeContext>({
  isDarkThemeEnabled: false
});

interface ThemeProviderProps {
  children: JSX.Element;
}

const config = {
  localStorageEntry: 'darkCBTheme'
};

const ThemeProvider = ({
  children
}: ThemeProviderProps): React.ReactElement => {
  // const [hasMounted, setHasMounted] = useState(false);

  const [isDarkThemeEnabled, setIsDarkThemeEnabled] = useState(
    typeof window !== 'undefined' &&
      localStorage.getItem(config.localStorageEntry) !== null &&
      localStorage.getItem(config.localStorageEntry) === 'true'
  );

  const toggleTheme = () => {
    setIsDarkThemeEnabled(!isDarkThemeEnabled);
  };

  useEffect(() => {
    // setHasMounted(true);
    const localStorageTheme = localStorage.getItem(config.localStorageEntry);
    if (localStorageTheme === null) {
      localStorage.setItem(
        config.localStorageEntry,
        isDarkThemeEnabled.toString()
      );
    } else {
      setIsDarkThemeEnabled(localStorageTheme === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      config.localStorageEntry,
      isDarkThemeEnabled.toString()
    );
  }, [isDarkThemeEnabled]);

  // if (!hasMounted) return <></>;

  if (typeof window === 'undefined') return <></>;

  return (
    <ThemeContext.Provider value={{ isDarkThemeEnabled, toggleTheme }}>
      <div className={`theme-${isDarkThemeEnabled ? 'dark' : 'light'}`}>
        <div className="app-container">{children}</div>
      </div>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
