import React, { useContext } from 'react';

import { ReactComponent as IconSun } from '../../assets/images/svg/sun.svg';
import { ReactComponent as IconMoon } from '../../assets/images/svg/moon.svg';
import { ThemeContext } from '../providers/ThemeProvider';

const DarkModeToggle = (): React.ReactElement => {
  const { isDarkThemeEnabled, toggleTheme } = useContext(ThemeContext);

  return (
    <label id="navbarDarkModeToggle">
      <div className={`toggle ${isDarkThemeEnabled ? 'enabled' : 'disabled'}`}>
        {/* <span className="hidden">
          {isDarkThemeEnabled ? 'Enable Light Mode' : 'Enable Dark Mode'}
        </span> */}
        <div className="icons">
          <span className="svg">
            <IconSun />
          </span>
          <span className="svg">
            <IconMoon />
          </span>
        </div>
        <input
          id="toggle"
          name="toggle"
          type="checkbox"
          defaultChecked={isDarkThemeEnabled}
          onClick={toggleTheme}
        />
        <label
          id="drawerDarkModeToggle"
          htmlFor="toggle"
          className="toggle-label"
        >
          Toggle theme
        </label>
      </div>
    </label>
  );
};

export default DarkModeToggle;
