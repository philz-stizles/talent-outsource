import { useCallback, useState } from 'react';
import {
  Button,
  Input,
  Modal,
  SelectInput,
  TextArea,
} from '../../../../../components/ui';
import { useMutation, useQuery } from '@apollo/client';
import {
  CREATE_TECHNOLOGY,
  GET_TECHNOLOGIES,
} from '../../../../../graphql/technology';
import { GET_TECH_STACKS } from '../../../../../graphql/tech-stack';
import { TechStack } from '../../../../../types';

type Props = {
  isOpen?: boolean;
  onClose: () => void;
};

const CreateTechnologyModal: React.FC<Props> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [techStack, setTechStack] = useState<any>(null);
  const [description, setDescription] = useState('');
  const { loading, data } = useQuery<{ techStacks: TechStack[] }>(
    GET_TECH_STACKS
  );
  const [createTechnology, { loading: isLoading, error }] =
    useMutation(CREATE_TECHNOLOGY);

    console.log(techStack)

  const clearForm = () => {
    setName('');
    setDescription('');
    setTechStack(null);
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      console.log('hello');
      console.log(name, description, techStack );
      if (!name || !description) {
        return;
      }

      console.log(name, description);

      await createTechnology({
        variables: { data: { name, description, techStack: techStack.value } },
        refetchQueries: [GET_TECHNOLOGIES, 'GetTechnologies'],
      });

      clearForm();

      onClose();
    },
    [name, description, techStack, createTechnology, onClose]
  );

  return (
    <Modal title="Create a New Technology" onClose={onClose}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {error && <small>{error.message}</small>}
        <Input
          id="name"
          label="Name"
          disabled={isLoading}
          required
          onChange={(e) => setName(e.target.value)}
          placeholder="E.g. React"
        />
        <SelectInput
          label="Select a Technology Stack"
          options={
            data && data.techStacks
              ? data?.techStacks.map((techStack) => ({
                  value: techStack.id,
                  label: techStack.name,
                }))
              : []
          }
          value={techStack}
          onChange={(value) => setTechStack(value)}
        />

        <TextArea
          textarea
          id="description"
          label="Description"
          disabled={isLoading}
          required
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="flex justify-end items-center gap-3 pt-2">
          <Button
            size="md"
            disabled={isLoading}
            variant="outlined"
            label="Cancel"
            onClick={onClose}
          />
          <Button size="md" isLoading={isLoading} type="submit" label="Save" />
        </div>
      </form>
    </Modal>
  );
};

export default CreateTechnologyModal;
