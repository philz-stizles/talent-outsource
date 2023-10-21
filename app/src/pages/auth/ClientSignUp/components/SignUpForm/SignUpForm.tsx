import { IoPeople } from 'react-icons/io5';
import { Button, Input } from '../../../../../components/ui';

type Props = {};

const SignUpForm = (props: Props) => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col gap-5 py-5">
        <h2 className="text-4xl">How many team members do you require?</h2>
        <form>
          <Input />
          <Input />
          <Input />
          <Button />
        </form>
      </div>
      <div className="grid grid-cols-4"></div>
    </div>
  );
};

export default SignUpForm;
