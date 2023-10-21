import { Link, useHistory, useLocation } from 'react-router-dom';
import { FormEvent, useCallback, useState } from 'react';
import { Button, Input, Logo } from '../../../../components/ui';
import classNames from 'classnames';
import { IoLogoGoogle, IoLogoLinkedin, IoMail } from 'react-icons/io5';
import axios from 'axios';
import { signinUrl } from '../../../../utils/constants';
import { useAuth } from '../../../../context/auth-context';

type Props = {};

const AuthForm = (props: Props) => {
  const { state } = useLocation<{ email?: string; password?: string }>();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState(state && state?.email ? state.email : '');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const { login } = useAuth();

  const formIsValid = !!email && !!password;

  const handleSignIn = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!formIsValid) {
        return;
      }
      try {
        setIsLoading(true);
        const response = await axios.post(signinUrl, {
          email,
          password,
        });
        setIsLoading(false);
        if (
          !response ||
          !response.data ||
          !response.data.status ||
          !response.data.data
        ) {
          throw new Error('');
        }

        login(response.data.data);
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
    [formIsValid, email, password, login]
  );

  return (
    <div className="lg:p-8">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Sign in to your account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email below to create your account
          </p>
        </div>
        <div className={classNames('grid gap-4')}>
          <form onSubmit={handleSignIn}>
            {error && <small>{error}</small>}
            <div className="grid gap-2">
              <div className="grid gap-2">
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
                  id="password"
                  placeholder="Password"
                  type="password"
                  disabled={isLoading}
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                />
              </div>
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>

              <Button
                type="submit"
                disabled={isLoading || !formIsValid}
                isLoading={isLoading}
                iconLeft={IoMail}
              >
                Sign In with Email
              </Button>
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
          <Button
            type="button"
            className="border border-slate-600"
            variant="outlined"
            iconLeft={IoLogoGoogle}
            disabled={isLoading}
            isLoading={isLoading}
          >
            {/* {isLoading ? (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Icons.gitHub className="mr-2 h-4 w-4" />
                )}{' '} */}
            Google
          </Button>
          <Button
            type="button"
            className="border border-slate-600"
            variant="outlined"
            iconLeft={IoLogoLinkedin}
            disabled={isLoading}
            isLoading={isLoading}
          >
            {/* {isLoading ? (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Icons.gitHub className="mr-2 h-4 w-4" />
                )}{' '} */}
            LinkedIn
          </Button>
        </div>
        <p className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{' '}
          <Link
            to="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link
            to="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
