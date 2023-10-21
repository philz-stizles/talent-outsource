import { Link } from 'react-router-dom';
import { Logo } from '../../../components/ui';
import AuthForm from './components/AuthForm';
import classNames from 'classnames';

const SignIn = () => {
  return (
    <main>
      <div className="grid grid-cols-2 h-full">
        <div className="relative inset-0 bg-slate-900">
          <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
            <div className="absolute inset-0 bg-zinc-900" />
            <div className="relative z-20 flex items-center text-lg font-medium">
              <Logo />
            </div>
            <div className="relative z-20 mt-auto">
              <div className="gx tv aaa ctg cuy cxm czg">
                <div className="flex justify-start gap-8">
                  <div className="pt-80 w-44">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;h=528&amp;q=80"
                        alt=""
                        className="rounded-md bg-[rgba(17,24,39,0.05)] object-cover max-w-full h-auto aspect-[2/3]"
                      />
                      <div className="u aa ak adx bbt bbx bco"></div>
                    </div>
                  </div>
                  <div className="pt-36 w-44 flex flex-col gap-8">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;h=528&amp;q=80"
                        alt=""
                        className="rounded-md bg-[rgba(17,24,39,0.05)] object-cover max-w-full h-auto aspect-[2/3]"
                      />
                      <div className="u aa ak adx bbt bbx bco"></div>
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=.4&amp;w=396&amp;h=528&amp;q=80"
                        alt=""
                        className="rounded-md bg-[rgba(17,24,39,0.05)] object-cover max-w-full h-auto aspect-[2/3]"
                      />
                      <div className="u aa ak adx bbt bbx bco"></div>
                    </div>
                  </div>
                  <div className="pt-0 flex flex-col gap-8 w-44">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;crop=left&amp;w=400&amp;h=528&amp;q=80"
                        alt=""
                        className="rounded-md bg-[rgba(17,24,39,0.05)] object-cover max-w-full h-auto aspect-[2/3]"
                      />
                      <div className="u aa ak adx bbt bbx bco"></div>
                    </div>
                    <div className="ab">
                      <img
                        src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;h=528&amp;q=80"
                        alt=""
                        className="rounded-md bg-[rgba(17,24,39,0.05)] object-cover max-w-full h-auto aspect-[2/3]"
                      />
                      <div className="u aa ak adx bbt bbx bco"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="container absolute top-0 right-0 hidden flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <Link
              to="/talent/signup"
              className={classNames(
                // buttonVariants({ variant: 'ghost' }),
                'absolute right-4 top-4 md:right-8 md:top-8'
              )}
            >
              Login
            </Link>
          </div>
          <AuthForm />
        </div>
      </div>
    </main>
  );
};

export default SignIn;
