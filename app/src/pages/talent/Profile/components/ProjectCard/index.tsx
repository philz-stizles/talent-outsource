import { useState } from 'react';
import { createPortal } from 'react-dom';
import ProjectModal from './ProjectModal/ProjectModal';
import CardWrapper from '../CardWrapper/CardWrapper';

type Props = {
  title: string;
  description: string;
  icon?: any;
};

const ProjectCard = ({ title, description, icon }: Props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <CardWrapper
      title={title}
      description={description}
      onAction={() => setShowModal(true)}
    >
      {showModal &&
        createPortal(
          <ProjectModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          />,
          document.getElementById('modal')!
        )}
    </CardWrapper>
  );
};

export default ProjectCard;
