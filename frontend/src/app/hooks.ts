import { useEffect, useState } from 'react';

// Hook
const useWindowSize = (): Size => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
};

const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1536
};

export const useCheckWidthBelow = (breakpoint: Breakpoint): boolean => {
  const screenWidth = useWindowSize().width as number;
  return screenWidth <= breakpoints[breakpoint];
};

export const useCheckWidthAbove = (breakpoint: Breakpoint): boolean => {
  const screenWidth = useWindowSize().width as number;
  return screenWidth > breakpoints[breakpoint];
};