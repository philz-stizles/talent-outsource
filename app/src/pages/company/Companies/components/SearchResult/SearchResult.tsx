import CompanyCard from '../CompanyCard/CompanyCard';

type Props = {};

const SearchResult = (props: Props) => {
  const companies = [
    {
      id: 1,
      name: 'Teslaryc',
      slug: 'teslaryc',
      location: 'Lille, France, FR',
      noOfEmployees: 'Between 0 and 50 employees',
      imageUrl:
        'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      jobs: 1,
    },
    {
      id: 2,
      name: 'Teslaryc',
      slug: 'teslaryc',
      location: 'Lille, France, FR',
      noOfEmployees: 'Between 0 and 50 employees',
      imageUrl:
        'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      jobs: 1,
    },
    {
      id: 3,
      name: 'Teslaryc',
      slug: 'teslaryc',
      location: 'Lille, FR',
      noOfEmployees: 'Between 0 and 50 employees',
      imageUrl:
        'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      jobs: 2,
    },
    {
      id: 4,
      name: 'Teslaryc',
      slug: 'teslaryc',
      location: 'Lagos, Nigeria, NG',
      noOfEmployees: 'Between 0 and 50 employees',
      imageUrl:
        'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      jobs: 4,
    },
  ];
  return (
    <div className="grid grid-cols-5 gap-8">
      <div className="border border-slate-200"></div>
      <div className="col-span-4">
        <h2 className='py-4 p-2 text-xl'>15 companies found</h2>
        <div></div>
        <div className="grid grid-cols-3 gap-4">
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
