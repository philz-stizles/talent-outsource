import { useCallback, useState } from 'react';
import { Button, Input, Modal, TextArea } from '../../../../../components/ui';
import { useMutation } from '@apollo/client';
import {
  CREATE_TECH_STACK,
  GET_TECH_STACKS,
} from '../../../../../graphql/tech-stack';

type Props = {
  isOpen?: boolean;
  onClose: () => void;
};

const CreateTechStackModal: React.FC<Props> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [createTechStack, { data, loading: isLoading, error }] =
    useMutation(CREATE_TECH_STACK);

  // const { mutate, isLoading, isError, error } = useMutation(createTechStack, {
  //   onSuccess: () => {
  //     clearForm();
  //     queryClient.invalidateQueries({ queryKey: ['tech-stacks'] });
  //     onClose();
  //   },
  // });

  const clearForm = () => {
    setName('');
    setDescription('');
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      console.log('hello');
      console.log(name, description);
      if (!name || !description) {
        return;
      }

      console.log(name, description);

      await createTechStack({
        variables: { data: { name, description } },
        refetchQueries: [GET_TECH_STACKS, 'GetTechStacks'],
      });

      clearForm();

      onClose();
    },
    [createTechStack, description, onClose, name]
  );

  return (
    <Modal title="Create a New Tech Stack" onClose={onClose}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {error && <small>{error.message}</small>}
        <Input
          id="name"
          label="Name"
          disabled={isLoading}
          required
          onChange={(e) => setName(e.target.value)}
          placeholder="E.g. DevOps"
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

export default CreateTechStackModal;
