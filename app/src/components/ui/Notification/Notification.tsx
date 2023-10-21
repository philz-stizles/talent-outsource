import { LucideIcon, X } from 'lucide-react';
import { IconType } from 'react-icons';
import Button from '../Button/Button';

type Props = {
  title: string;
  content?: string;
  icon?: IconType | LucideIcon;
  onClose: (event: React.MouseEvent<any>) => void;
  onConfirm?: () => void;
  onCancel?: () => void;
};

const Notification: React.FC<Props> = ({
  title,
  content,
  icon: Icon,
  onConfirm,
  onCancel,
  onClose,
}: Props) => {
  return (
    <div className="rounded-lg shadow-sm bg-white overflow-hidden max-w-md w-full pointer-events-auto">
      <div className="p-4">
        <div className="flex items-start gap-2.5">
          {Icon && (
            <div className="flex-shrink">
              <Icon size={18} />
            </div>
          )}
          <div className="flex-1 flex flex-col gap-1 pt-0.5 text-sm">
            <p className="font-medium text-slate-950">{title}</p>
            <p className="text-slate-500">{content}</p>
            {(!!onConfirm || !!onCancel) && (
              <div className="flex gap-3 mt-4">
                <Button label="Accept" size="sm" />
                <Button label="Decline" outlined />
              </div>
            )}
          </div>
          <div className="flex-shrink">
            <X
              className="text-slate-500 cursor-pointer"
              size={18}
              onClick={onClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
