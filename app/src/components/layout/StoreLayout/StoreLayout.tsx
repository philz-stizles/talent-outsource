import { Footer, Navbar } from '../../shared';
import { PropsWithChildren } from 'react';

const StoreLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
};

export default StoreLayout;
