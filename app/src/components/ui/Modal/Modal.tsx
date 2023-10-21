import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';
import { useKeyEvent } from '../../../hooks/use-escape-key';
import { createPortal } from 'react-dom';
import { Size } from '../../../types';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel?: string;
  onClose: () => void;
  onSubmit?: () => void;
  secondaryActionLabel?: string;
  onSecondaryAction?: () => void;
  size?: Size;
};

const SIZE = {
  sm: 'max-w-[35rem]',
  md: '',
  lg: '',
};

const Modal = ({ children, title, subtitle, body, size = 'sm', onClose }: Props) => {
  useKeyEvent({ action: () => onClose() });
  const sizeClass = SIZE[size];
  return createPortal(
    <div onClick={onClose} className="backdrop">
      <motion.dialog
        variants={{
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
        }}
        initial="initial"
        animate="animate"
        exit="initial"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
        className={classNames('modal', sizeClass)}
      >
        {/* HEADER */}
        <div className="relative flex flex-col justify-start items-start">
          <h2 className="text-xl font-medium mb-3">{title}</h2>
          <p className='text-slate-500 text-base font-light'>
            You have 60 minutes to complete the challenge. The challenge is
            designed to be hard to complete within 60 min
          </p>
          <button
            className="absolute text-slate-400 p-1 border-0 transition top-0 right-0 hover:opacity-70"
            onClick={onClose}
          >
            <IoMdClose size={20} />
          </button>
        </div>
        {/* BODY */}
        <div className="pt-6">{children}</div>
        {/* FOOTER */}
        {/* <div className="flex gap-4 p-6">
          <Button
            variant="outlined"
            label={secondaryActionLabel}
            onClick={onClose}
          />
          <Button type="submit" label={actionLabel} onSubmit={onSubmit} />
        </div> */}
      </motion.dialog>
    </div>,
    document.getElementById('modal')!
  );
};

export default Modal;
