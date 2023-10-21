import { Footer, MenuBar } from '../../shared';
import { PropsWithChildren } from 'react';

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    // div className="bg-slate-950 text-slate-100 flex flex-col"
    <>
      <MenuBar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default DashboardLayout;
