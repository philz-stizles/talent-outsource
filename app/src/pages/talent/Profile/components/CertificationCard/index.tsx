import { useState } from 'react';
import { createPortal } from 'react-dom';
import CertificationModal from './CertificationModal/CertificationModal';
import CardWrapper from '../CardWrapper/CardWrapper';

type Props = {
  title: string;
  description: string;
  icon?: any;
};

const CertificationCard = ({ title, description, icon }: Props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <CardWrapper
      title={title}
      description={description}
      onAction={() => setShowModal(true)}
    >
      {showModal &&
        createPortal(
          <CertificationModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          />,
          document.getElementById('modal')!
        )}
    </CardWrapper>
  );
};

export default CertificationCard;
