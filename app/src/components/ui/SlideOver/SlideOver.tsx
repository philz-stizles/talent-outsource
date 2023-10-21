import { useCallback, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { Button } from '..';
import classNames from 'classnames';
import { X } from 'lucide-react';
import { Size } from '../../../types';

const SIZE = {
  sm: 'max-w-md',
  md: 'max-w-xl',
  lg: 'max-w-2xl',
};

type Props = {
  isOpen?: boolean;
  disabled?: boolean;
  title?: string;
  subTitle?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  onClose: () => void;
  onSubmit: () => void;
  secondaryActionLabel?: string;
  onSecondaryAction?: () => void;
  size?: Size;
};

const SlideOver: React.FC<Props> = ({
  isOpen,
  disabled,
  size = 'sm',
  title,
  subTitle,
  body,
  footer,
  actionLabel,
  onClose,
  onSubmit,
  secondaryActionLabel,
  onSecondaryAction,
}) => {
  const [isShowing, setIsShowing] = useState(isOpen);

  useEffect(() => {
    setIsShowing(isOpen);
  }, [isOpen]);

  const closeHandler = useCallback(() => {
    if (disabled) {
      return;
    }

    setIsShowing(false);

    setTimeout(() => {
      onClose();
    }, 500);
  }, [disabled, onClose]);

  const submitHandler = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  const secondaryActionHandler = useCallback(() => {
    if (disabled || !onSecondaryAction) {
      return;
    }

    onSecondaryAction();
  }, [disabled, onSecondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed bg-neutral-800/70 z-50 inset-0 outline-none focus:outline-none overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          {/* CONTENT */}
          <div
            className={classNames(
              'pointer-events-auto relative w-screen',
              SIZE[size]
            )}
          >
            <div></div>

            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
              {/* HEADER */}
              <div className="px-4 sm:px-6 py-4 sm:py-6 flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <h2 className="text-base font-semibold leading-6 text-gray-900">
                    {title}
                  </h2>
                  <div>
                    <X className="cursor-pointer" size={18} onClick={onClose} />
                  </div>
                </div>

                {subTitle && <p className=" text-sm">{subTitle}</p>}
              </div>
              {/* BODY */}
              <div className="relative mt-6 flex-1 px-4 sm:px-6">
                <div className="absolute inset-0 px-4 sm:px-6">{body}</div>
              </div>
              {/* FOOTER */}
              <div className="px-4 sm:px-4 py-4 sm:py-4 flex justify-end gap-2 border-t">
                {secondaryActionLabel && (
                  <Button
                    label={secondaryActionLabel}
                    outlined
                    onClick={secondaryActionHandler}
                    disabled={disabled}
                  />
                )}
                <Button
                  label={actionLabel}
                  onClick={submitHandler}
                  disabled={disabled}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideOver;
