import React from 'react';

interface HeadingMainProps {
  text: string;
}

const HeadingMain = ({ text }: HeadingMainProps): React.ReactElement => {
  return <h1 className="heading-main">{text}</h1>;
};

export default HeadingMain;
