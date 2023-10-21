import { PlusCircle } from 'lucide-react';

type Props = {
  children?: React.ReactNode;
  title: string;
  description: string;
  icon?: any;
  onAction?: () => void;
  modal?: React.ReactPortal | false;
};

const CardWrapper: React.FC<Props> = ({
  children,
  title,
  description,
  icon: Icon,
  onAction,
  modal,
}) => {
  return (
    <>
      <div className="rounded-lg border text-card-foreground shadow">
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="flex justify-between item-start">
            <div className="flex flex-col space-y-1.5">
              <h3 className="font-semibold leading-none tracking-tight">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
            {onAction && (
              <PlusCircle className="cursor-pointer" onClick={onAction} />
            )}
          </div>
        </div>
      </div>
      {children}
    </>
  );
};

export default CardWrapper;
