import MenuBar from '../../../components/shared/MenuBar/MenuBar';

type Props = {};

const CompanyDetails = (props: Props) => {
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
        </div>
      </div>
      <section className="p-8">Company Details</section>
    </div>
  );
};

export default CompanyDetails;
