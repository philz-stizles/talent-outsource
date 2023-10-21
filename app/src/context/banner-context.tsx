import { PropsWithChildren, createContext, useContext, useState } from 'react';

const defaultValue = {};

const BannerContext = createContext(defaultValue);

export const BannerProvider = ({ children }: PropsWithChildren) => {
  const [isShowing, setIsShowing] = useState();

  return (
    <BannerContext.Provider value={{ isShowing }}>
      {children}
    </BannerContext.Provider>
  );
};

export const useBannerContext = () => useContext(BannerContext);
