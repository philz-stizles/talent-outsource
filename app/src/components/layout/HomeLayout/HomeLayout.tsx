import { Footer, Header, Navbar } from '../../shared';
import { PropsWithChildren } from 'react';

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
};

export default HomeLayout;
