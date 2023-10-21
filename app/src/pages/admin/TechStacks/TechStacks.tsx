import { Button } from '../../../components/ui';
import { useState } from 'react';
import CreateTechStackModal from './components/CreateTechStackModal/CreateTechStackModal';
import { Container } from '../../../components/shared';
import { IoAdd, IoArchive } from 'react-icons/io5';
import { AnimatePresence } from 'framer-motion';
import TechStackList from './components/TechStackList/TechStackList';
import { CREATE_TECH_STACK, GET_TECH_STACKS } from '../../../graphql/tech-stack';
import { useMutation, useQuery } from '@apollo/client';

const TechStacks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { loading, data, error } = useQuery(GET_TECH_STACKS);

  console.log(data)

  return (
    <>
      <div className="bg-slate-900 text-slate-100">
        <Container fluid className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Tech Stacks</h2>
            <Button
              label="Add Tech Stack"
              iconLeft={IoAdd}
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </Container>
      </div>
      <Container fluid className="flex-1 flex flex-col gap-8 py-12 px-8">
        {data && data.techStacks && data.techStacks.length > 0 ? (
          <TechStackList data={data.techStacks} />
        ) : (
          <div className="flex-1 flex justify-center items-center border border-slate-300 rounded-lg">
            <div className="w-2/12 text-center flex flex-col items-center gap-2">
              <IoArchive size={42} />
              <h3 className="text-lg font-medium">
                No Tech Stacks have been created yet.
              </h3>
            </div>
          </div>
        )}
      </Container>
      <AnimatePresence>
        {' '}
        {isModalOpen && (
          <CreateTechStackModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default TechStacks;
