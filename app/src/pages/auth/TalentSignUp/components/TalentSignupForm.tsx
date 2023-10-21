import { useHistory } from 'react-router-dom';
import { FormEvent, useCallback, useState } from 'react';
import { Button, Input } from '../../../../components/ui';
import classNames from 'classnames';
import { IoMail } from 'react-icons/io5';
import Select, { MultiValue } from 'react-select';
import axios from 'axios';
import { talentSignupUrl } from '../../../../utils/constants';
import { Instagram, Linkedin } from 'lucide-react';

const TalentSignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [source, setSource] = useState<MultiValue<any>>();
  const [password, setPassword] = useState('');
  const history = useHistory();

  const formIsValid = !!name && !!email && !!password;

  const handleSignup = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!formIsValid) {
        return;
      }
      try {
        setIsLoading(true);
        const response = await axios.post(talentSignupUrl, {
          name,
          email,
          password,
          source: source?.map((s) => s.label),
        });
        if (!response) {
          throw new Error('');
        }
        // history.push({ pathname: '/signin', state: { email, password } });
        history.push(`/talent/code-verification?email=${email}`);
      } catch (error: any) {
        const message =
          error &&
          error.response &&
          error.response.data &&
          error.response.data.message
            ? error.response.data.message
            : 'Something went wrong. Please try again or contact support.';

        setIsLoading(false);
        setError(message);
      }
    },
    [formIsValid, name, email, password, source, history]
  );
  return (
    <div className={classNames('grid gap-4')}>
      <small className="text-rose-600">{error}</small>
      <form onSubmit={handleSignup}>
        <div className="grid gap-2">
          <div className="grid gap-4 mb-2">
            <Input
              label="Full name"
              id="name"
              placeholder="Full name"
              disabled={isLoading}
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
            <Input
              label="Email"
              id="email"
              placeholder="name@example.com"
              type="email"
              autoComplete="email"
              disabled={isLoading}
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            <Input
              label="Password"
              id="email"
              placeholder="Password"
              type="password"
              disabled={isLoading}
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
            <Select
              isMulti
              options={[
                { label: 'Linkedin', icon: <Linkedin size={18} /> },
                { label: 'Instagram', icon: <Instagram size={18} /> },
              ]}
              // components={animatedComponents}
              styles={{
                control: (provided, state) => ({
                  ...provided,
                  background: '#fff',
                  borderColor: '#9e9e9e',
                  borderRadius: '7px',
                  paddingTop: '0px',
                  paddingBottom: '0px',
                }),
                input: (provided, state) => ({
                  ...provided,
                  paddingTop: '6px',
                  paddingBottom: '6px',
                }),
              }}
              placeholder="How did you hear about us?"
              isClearable
              value={source}
              onChange={(value) => setSource(value)}
              formatOptionLabel={(option: any) => (
                <div className="flex flex-row items-center gap-3">
                  <div>{option.icon}</div>
                  <div>
                    {option.label}
                    {/* <span className="text-neutral-500 ml-1">
                      {option.region}
                    </span> */}
                  </div>
                </div>
              )}
              classNames={{
                control: () => 'p-3 border-2',
                // input: () => 'py-2',
                option: () => 'text-sm',
                placeholder: () => 'text-sm',
              }}
              theme={(theme) => ({
                ...theme,
                borderRadius: 6,
                colors: {
                  ...theme.colors,
                  primary: 'black',
                  primary25: 'rgba(99,102,241,0.1)',
                },
              })}
            />
          </div>

          <Button
            label="Sign In with Email"
            // size="lg"
            disabled={isLoading || !formIsValid}
            isLoading={isLoading}
            iconLeft={IoMail}
          />
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
    </div>
  );
};

export default TalentSignupForm;
