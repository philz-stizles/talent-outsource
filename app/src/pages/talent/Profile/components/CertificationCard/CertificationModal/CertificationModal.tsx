import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Input } from '../../../../../../components/ui';
import Modal from '../../../../../../components/modals/Modal/Modal';
import axios from 'axios';

type InitialData = {
  name: string;
  organization: string;
  description: string;
  link: string;
  issueDate: string;
};

type Props = {
  isOpen?: boolean;
  onClose: () => void;
  initialData?: InitialData;
};

const CertificationModal: React.FC<Props> = ({
  onClose,
  isOpen,
  initialData,
}) => {
  const [formValues, setFormValues] = useState({
    name: '',
    organization: '',
    description: '',
    link: '',
    issueDate: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const { name, organization, description, link, issueDate } = formValues;

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
      <Input label="name" name="name" value={name} onChange={changeHandler} />
      <Input
        label="organization"
        name="organization"
        value={organization}
        placeholder="Ex: Udemy"
        onChange={changeHandler}
      />
      <Input
        label="Description"
        name="description"
        value={description}
        placeholder="Ex: "
        onChange={changeHandler}
      />

      <Input label="Link" name="link" value={link} onChange={changeHandler} />
      <Input
        type="date"
        label="Issue Date"
        name="issueDate"
        value={issueDate}
        onChange={changeHandler}
      />
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

export default CertificationModal;
