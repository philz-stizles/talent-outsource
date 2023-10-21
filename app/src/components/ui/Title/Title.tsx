type Props = {
  title: string;
  subTitle?: string;
  center?: boolean;
};

const Heading: React.FC<Props> = ({ title, subTitle, center }) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
      <div className="text-2xl font-bold">{title}</div>
      {subTitle && (
        <p className="font-light text-neutral-500 mt-2">{subTitle}</p>
      )}
    </div>
  );
};

export default Heading;
