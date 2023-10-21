import { useEffect } from 'react';

type Props = {
  event?: 'keyup' | 'keydown';
  action: () => void;
};

export const useKeyEvent = ({ event = 'keydown', action }: Props) => {
  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      console.log('useKeyEvent', event.key);
      if (event.key && event.key.toLowerCase() === 'escape') {
        action();
      }
    };

    document.addEventListener(event, keyDownHandler);

    return () => {
      document.removeEventListener(event, keyDownHandler);
    };
  }, [action, event]);
};
