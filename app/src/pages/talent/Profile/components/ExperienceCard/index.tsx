import { useState } from 'react';
import { createPortal } from 'react-dom';
import ExperienceModal from './ExperienceModal/ExperienceModal';
import CardWrapper from '../CardWrapper/CardWrapper';

type Props = {
  children?: React.ReactNode;
  title: string;
  description: string;
  icon?: any;
};

const ExperienceCard = ({ children, title, description, icon }: Props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <CardWrapper title={title} description={description} onAction={() => setShowModal(true)}>
      {showModal &&
        createPortal(
          <ExperienceModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          />,
          document.getElementById('modal')!
        )}
    </CardWrapper>
  );
};

export default ExperienceCard;
