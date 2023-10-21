import classNames from "classnames";

type Props = {
  className?: string;
  title?: string;
  subTitle?: string;
};

const Heading = ({ title, subTitle, className }: Props) => {
  return (
    <div className={classNames('py-8 flex', className)}>
      <div className="max-w-xl">
        {title && <h5 className="text-slate-500 mb-1">{`- ${title}`}</h5>}
        <h2 className="text-3xl font-bold">{subTitle}</h2>
      </div>
    </div>
  );
};

export default Heading;
