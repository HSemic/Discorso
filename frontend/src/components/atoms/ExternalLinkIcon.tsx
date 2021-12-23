import React from 'react';

interface ExternalLinkIconProps {
  url: string;
  name: string;
  children: JSX.Element;
}

const ExternalLinkIcon = ({
  url,
  name,
  children
}: ExternalLinkIconProps): React.ReactElement => {
  return (
    <a
      className="link-icon"
      href={url}
      aria-label={name}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default ExternalLinkIcon;
