import React from 'react';

import DarkModeToggle from '../atoms/DarkModeToggle';
import TextLogo from '../atoms/TextLogo';

interface NavbarProps {
  logoText: string;
}

const Navbar = ({ logoText }: NavbarProps): React.ReactElement => {
  return (
    <nav className="navbar">
      <div className="row row--align-center">
        <div className="navbar__logo-menu-wrapper">
          <TextLogo text={logoText} />
        </div>
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
