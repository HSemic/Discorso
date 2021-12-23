import React from 'react';

interface TextLogoProps {
  text: String;
}

const TextLogo = ({ text }: TextLogoProps): React.ReactElement => {
  return (
    <a href="/" className="logo">
      {text}
    </a>
  );
};

export default TextLogo;
