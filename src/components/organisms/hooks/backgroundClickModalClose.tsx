import React, { useEffect } from 'react';

interface backgroundClickHandlerProps {
  onBackgroundClick: () => void;
  children: React.ReactNode;
}

const BackgroundClickHandler: React.FC<backgroundClickHandlerProps> = ({ onBackgroundClick, children }) => {
  useEffect(() => {
    const handleClickBackground = (event: MouseEvent) => {
      const rootElement = document.getElementById('root');
      if (rootElement && !rootElement.contains(event.target as Node)) {
        onBackgroundClick();
      }
    };

    document.addEventListener('click', handleClickBackground);
    return () => {
      document.removeEventListener('click', handleClickBackground);
    };
  }, [onBackgroundClick]);

  return <>{children}</>;
};

export default BackgroundClickHandler;