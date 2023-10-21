import { useCallback, useState } from 'react';

import { Input, RichText } from '../../../../../../components/ui';
import Modal from '../../../../../../components/modals/Modal/Modal';
import axios from 'axios';
import useCountries from '../../../../../../hooks/use-countries';

type Props = {
  isOpen?: boolean;
  onClose: () => void;
  data?: any;
};

const ExperienceModal: React.FC<Props> = ({ onClose, isOpen, data }) => {
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { getAll } = useCountries();

  const submitHandler = useCallback(() => {
    try {
      setIsLoading(true);
      const response = axios.post('/api/v1/auth/register-client', {
        description,
      });
      console.log(response);
    } catch (error) {
      setIsLoading(false);
    }
  }, [description]);

  const secondaryActionHandler = useCallback(() => {
    onClose();
  }, [onClose]);

  let body = (
    <form className="grid gap-1">
      <Input label="Position" placeholder="Ex: Software Engineer" />
      <Input label="Company Name" placeholder="Ex: TalentSource" />
      <Input label="Location" />
      <Input label="Industry" />
      <div className="flex justify-center items-center gap-2">
        <Input type="date" label="Start Date" />
        <Input type="date" label="End Date" />
      </div>
      <RichText
        label="Description"
        value={description}
        onChange={(value) => setDescription(value)}
      />
      <div className="form-group"></div>
    </form>
  );

  return (
    <Modal
      title="Add Work History"
      body={body}
      disabled={isLoading}
      actionLabel="Save"
      secondaryActionLabel="Cancel"
      onSecondaryAction={secondaryActionHandler}
      onSubmit={submitHandler}
      isOpen={isOpen}
      onClose={onClose}
    />
  );
};

export default ExperienceModal;
