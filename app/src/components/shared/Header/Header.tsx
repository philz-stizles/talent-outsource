import { Container, Navbar } from '..';
import { Button } from '../../ui';

const Header = () => {
  return (
    <header className="min-h-screen relative bg-slate-900 text-white">
      <Navbar />
      <Container className="h-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-8 w-8/12 text-center">
          <h2 className="text-5xl font-normal">
            Unlock Your Potential: Join Our Talent Revolution Today
            {/* <strong>Let&apos;s</strong> Help You Make Your{' '}
            <strong>Interior Minimalist</strong> & <strong>Modern</strong> */}
          </h2>
          <p className="text-xl font-light">
            Our cutting-edge talent outsourcing platform is here to connect you
            with top-tier professionals who are experts in their fields. Say
            goodbye to the traditional hiring hassles and hello to a world of
            limitless possibilities.
          </p>
          <Button size="lg">Hire Top Talent</Button>
          {/* <div className="flex gap-5">
            <div className="flex flex-col gap-1 pr-5 border-r-2 border-slate-300">
              <p className="text-2xl font-bold">300+</p>
              <p className="text-slate-500">Collections</p>
            </div>
            <div className="flex flex-col gap-1 pr-5 border-r-2 border-slate-300">
              <p className="text-2xl font-bold">20K</p>
              <p className="text-slate-500">Customers</p>
            </div>
            <div className="flex flex-col gap-1 mr-5">
              <p className="text-2xl font-bold">9.4+</p>
              <p className="text-slate-500">Review Rating</p>
            </div>
          </div> */}
        </div>
      </Container>
    </header>
  );
};

export default Header;
