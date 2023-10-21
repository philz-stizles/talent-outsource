 

type Props = {
  title: string;
  subTitle?: string;
};

const SectionHeader = ({ title, subTitle }: Props) => {
  return (
    <div className="my-12">
      <h2 className="uppercase text-3xl font-extrabold text-center">
        {title}
      </h2>
      {subTitle && <h4 className="">{subTitle}</h4>}
    </div>
  );
};

export default SectionHeader;
