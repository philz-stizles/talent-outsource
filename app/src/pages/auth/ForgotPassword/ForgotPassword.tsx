import { Button, Input, Logo } from '../../../components/ui';
import classNames from 'classnames';
import { FcLock } from 'react-icons/fc';
import { useLocation } from 'react-router-dom';
import { Container } from '../../../components/shared';

const ForgotPassword = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const email = searchParams.get('email');

  return (
    <div className="relative h-full lg:px-0">
      <Container className="relative h-full">
        <Logo className=' absolute top-12 left-12' />
        <div className="h-full flex items-center justify-center">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
            <div className="flex flex-col gap-2 items-center text-center mb-6">
              <FcLock size={48} />
              <h1 className="text-2xl font-semibold tracking-tight">
                Check your email
              </h1>
              <p className="text-sm text-slate-600">
                We have sent and email for{' '}
                <span className="font-semibold">{email}</span>. Check your email
                and type in your verification code.
              </p>
            </div>
            <div className={classNames('grid gap-5')}>
              <form>
                <div className="grid gap-5">
                  <Input
                    label="Email"
                    id="email"
                    placeholder="000-0000-000"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    //   disabled={isLoading}
                  />
                  <Button label="Send" />
                </div>
              </form>
              <div
                data-testid="warning-message"
                className="bg-yellow-100 px-8 py-4 text-center font-normal tablet:mx-auto tablet:mt-5 tablet:max-w-md"
              >
                <p className="text-sm leading-base text-dark-100">
                  The verification code will expire in 5 minutes. Please make
                  sure to validate your account within the specified time frame.
                </p>
              </div>
              <div className="mt-8 text-center text-sm font-normal leading-base text-dark-200">
                <h2 data-testid="title" className="font-bold">
                  Did not receive the email?
                </h2>
                <div
                  data-testid="subtitle"
                  className="flex flex-col items-center justify-center md:flex-row"
                >
                  <p>Check your spam filter or </p>
                  <div className="relative">
                    <button
                      className="flex items-center justify-center gap-2 font-normal focus:outline-none focus:ring-indigo-300 transition-colors ease-in-out duration-100 rounded-lg shadow-none active:text-indigo-500 disabled:text-gray-500 disabled:cursor-not-allowed cursor-pointer ml-1 w-fit min-w-0 p-0 text-sm text-indigo-500 outline-none hover:text-indigo-300 focus:ring-0 active:border-0"
                      data-testid="resend-mail-button"
                      data-state-variant="ghost"
                    >
                      resend verification code here
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ForgotPassword;
