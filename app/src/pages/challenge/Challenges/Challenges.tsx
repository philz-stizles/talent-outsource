import { Search } from 'lucide-react';
import MenuBar from '../../../components/shared/MenuBar/MenuBar';
import { Container } from '../../../components/shared';

type Props = {};

const Challenges = (props: Props) => {
  return (
    <div className="bg-slate-50">
      <div className="bg-slate-950 text-slate-100 hidden flex-col md:flex">
        <MenuBar />
        <div className="w-11/12 mx-auto flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2 mb-6">
            <h2 className="text-xl font-bold tracking-tight">
              Home {`>`} Companies
            </h2>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col items-center text-center gap-6 max-w-4xl">
              <h1 className=" text-2xl font-semibold">
                Technical tests and quiz for developers
              </h1>
              <h2 className="text-xl font-light">
                More than 100 tests to work on your job interviews and assess
                your knowledge of different technologies: front-end, back-end,
                web, project management...
              </h2>
              <div className="flex items-center gap-4 w-7/12 h-12">
                <input
                  className="px-4 py-2 rounded-lg w-full h-full text-slate-700 text-lg font-light outline-none"
                  type="search"
                  placeholder="Search for a coding challenge..."
                />
                <button className="p-2 px-4 rounded-lg bg-slate-600 h-full">
                  <Search className="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="py-12">
        <Container fluid className="grid grid-cols-3 gap-6">
          {[{}, {}, {}, {}, {}, {}].map((item, i) => (
            <div
              key={i}
              className="relative rounded-lg overflow-hidden w-full h-48"
            >
              <img
                className="w-full h-auto object-cover"
                src="https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <div className="absolute px-4 py-2 left-0 right-0 bottom-0 flex justify-between items-center text-white">
                <span className="font-semibold">Back-end Developer</span>
                <small>42 tests</small>
              </div>
            </div>
          ))}
        </Container>
      </section>
    </div>
  );
};

export default Challenges;
