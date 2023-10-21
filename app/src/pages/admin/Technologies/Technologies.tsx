import { Button } from '../../../components/ui';
import { useState } from 'react';
import CreateTechnologyModal from './components/CreateTechnologyModal/CreateTechnologyModal';
import { Container } from '../../../components/shared';
import { IoAdd, IoArchive } from 'react-icons/io5';
import { AnimatePresence } from 'framer-motion';
import TechnologyList from './components/TechnologyList/TechnologyList';
import { GET_TECH_STACKS } from '../../../graphql/tech-stack';
import { useQuery } from '@apollo/client';

const Technologies = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { loading, data } = useQuery(GET_TECH_STACKS);

  return (
    <>
      <div className="bg-slate-900 text-slate-100">
        <Container fluid className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Technologies</h2>
            <Button
              label="Add Technology"
              iconLeft={IoAdd}
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </Container>
      </div>
      <Container fluid className="flex-1 flex flex-col gap-8 py-12 px-8">
        {data && data.technologies && data.technologies.length > 0 ? (
          <TechnologyList data={data.technologies} />
        ) : (
          <div className="flex-1 flex justify-center items-center border border-slate-300 rounded-lg">
            <div className="w-2/12 text-center flex flex-col items-center gap-2">
              <IoArchive size={42} />
              <h3 className="text-lg font-medium">
                No Technologies have been created yet.
              </h3>
            </div>
          </div>
        )}
      </Container>
      <AnimatePresence>
        {isModalOpen && (
          <CreateTechnologyModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Technologies;
