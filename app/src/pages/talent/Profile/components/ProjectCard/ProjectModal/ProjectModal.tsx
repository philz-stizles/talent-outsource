import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Input } from '../../../../../../components/ui';
import Modal from '../../../../../../components/modals/Modal/Modal';
import axios from 'axios';

type InitialData = {
  title: string;
  description: string;
  link: string;
  startDate: string;
  endDate: string;
};

type Props = {
  isOpen?: boolean;
  onClose: () => void;
  initialData?: InitialData;
};

const ProjectModal: React.FC<Props> = ({ onClose, isOpen, initialData }) => {
  const [formValues, setFormValues] = useState({
    title: '',
    description: '',
    link: '',
    startDate: '',
    endDate: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const { title, description, link, startDate, endDate } = formValues;

  useEffect(() => {
    if (initialData) {
      setFormValues(initialData);
    }
  }, [initialData]);

  const submitHandler = useCallback(() => {
    try {
      setIsLoading(true);
      const response = axios.post('/api/v1/auth/register-client', formValues);
      console.log(response);
    } catch (error) {
      setIsLoading(false);
    }
  }, [formValues]);

  const secondaryActionHandler = useCallback(() => {
    onClose();
  }, [onClose]);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevState) => ({ ...prevState }));
  };

  let body = (
    <form className="grid gap-1">
      <Input
        label="Project Title"
        name="title"
        value={title}
        onChange={changeHandler}
      />
      <Input
        label="Project Description"
        name="description"
        value={description}
        placeholder="Ex: Software Engineer"
        onChange={changeHandler}
      />
      <Input
        label="Project Link"
        name="link"
        value={link}
        placeholder="Ex: Computer Science"
        onChange={changeHandler}
      />

      <div className="flex justify-center items-center gap-2">
        <Input
          type="date"
          label="Start Date"
          name="startDate"
          value={startDate}
          onChange={changeHandler}
        />
        <Input
          type="date"
          label="End Date"
          name="endDate"
          value={endDate}
          onChange={changeHandler}
        />
      </div>
    </form>
  );

  return (
    <Modal
      title="Add Academic Achievement"
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

export default ProjectModal;
