import { useState } from 'react';
import { createPortal } from 'react-dom';
import EducationModal from './EducationModal/EducationModal';
import CardWrapper from '../CardWrapper/CardWrapper';

type Props = {
  title: string;
  description: string;
  icon?: any;
};

const EducationCard = ({ title, description, icon }: Props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <CardWrapper
      title={title}
      description={description}
      onAction={() => setShowModal(true)}
    >
      {showModal &&
        createPortal(
          <EducationModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          />,
          document.getElementById('modal')!
        )}
    </CardWrapper>
  );
};

export default EducationCard;
