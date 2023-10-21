import { Link } from 'react-router-dom';
import { Logo } from '../../../components/ui';
import TalentSignupForm from './components/TalentSignupForm';
import Avatar from '../../../components/Avatar';

const TalentSignUp = () => {
  return (
    <>
      <div className="container relative hidden h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full items-center bg-muted p-24 text-white dark:border-r lg:flex bg-slate-900">
          <div
            className="panel visible inset-0 flex scale-100 flex-col justify-center opacity-100 transition duration-500"
            id="panel-0"
          >
            <div className="relative">
              <Logo className="mb-24" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                Make work flow across teams while connecting back to company
                goals
              </h3>
              <p className="mt-8 text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                omnis voluptatem accusantium nemo perspiciatis delectus atque
                autem! repellat expedita consequatur! Officiis id consequatur
                atque doloremque!
              </p>
              <div className="mt-12 mb-16 space-y-6">
                <div className="flex items-center gap-7">
                  <div className="flex">
                    <Avatar src="https://i.pravatar.cc/150?img=1" />
                    <Avatar src="https://i.pravatar.cc/150?img=2" />
                    <Avatar src="https://i.pravatar.cc/150?img=3" />
                    <Avatar src="https://i.pravatar.cc/150?img=4" />
                  </div>

                  <p className="font-semibold">
                    <span className="font-bold text-indigo-500">250,000+</span>
                    engineers on the platform!
                  </p>
                </div>
                {/* <div className="flex items-center gap-6">
                  <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                    <img
                      className="m-auto h-8 w-auto"
                      src="https://cdn-icons-png.flaticon.com/512/4727/4727266.png"
                      alt="icon illustration"
                      loading="lazy"
                      width="512"
                      height="512"
                    />
                  </div>
                  <div className="w-[calc(100%-7.5rem)]">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                      Together as one
                    </h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      Accusantium nemo perspiciatis delectus atque autem!
                    </p>
                  </div>
                </div> */}

                {/* <div className="flex items-center gap-6">
                  <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                    <img
                      className="m-auto h-8 w-auto"
                      src="https://cdn-icons-png.flaticon.com/512/584/584796.png"
                      alt="icon illustration"
                      loading="lazy"
                      width="512"
                      height="512"
                    />
                  </div>
                  <div className="w-[calc(100%-7.5rem)]">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                      New ideas
                    </h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      Accusalectus atque autem accusantium nemo perspiciatis
                      delectus atque autem!
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                    <img
                      className="m-auto h-8 w-auto"
                      src="https://cdn-icons-png.flaticon.com/512/584/584796.png"
                      alt="icon illustration"
                      loading="lazy"
                      width="512"
                      height="512"
                    />
                  </div>
                  <div className="w-[calc(100%-7.5rem)]">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                      New ideas
                    </h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      Accusalectus atque autem accusantium nemo perspiciatis
                      delectus atque autem!
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          {/* <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium"></div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div> */}
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <TalentSignupForm />
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
      </div>
    </>
    // <div className="grid grid-cols-2 min-h-screen">
    //   <div className="flex justify-center items-center">
    //     <div className="max-w-md">
    //       <form onSubmit={handleSignup}>
    //         <div className="mb-4">
    //           <label className="flex mb-1 font-semibold">
    //             Every superstar needs a name, what's yours?
    //           </label>
    //           <div className="w-full flex items-center gap-2">
    //             <input
    //               className="py-3 px-4 rounded-lg border border-gray-300"
    //               type="text"
    //               placeholder="John"
    //               value={firstname}
    //               onChange={(e) => setFirstname(e.target.value)}
    //             />
    //             <input
    //               className="py-3 px-4 rounded-lg border border-gray-300 "
    //               type="text"
    //               placeholder="Doe"
    //               value={lastname}
    //               onChange={(e) => setLastname(e.target.value)}
    //             />
    //           </div>
    //         </div>
    //         <div className="mb-4">
    //           <label className="flex mb-1 font-semibold">
    //             What's your email?
    //           </label>
    //           <input
    //             className="py-3 px-4 w-full rounded-lg border border-gray-300"
    //             type="text"
    //             placeholder="someone@mail.com"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //           />
    //         </div>
    //         <div className="mb-4">
    //           <label className="flex mb-1 font-semibold">Your password</label>
    //           <input
    //             className="py-3 px-4 w-full rounded-lg border border-gray-300"
    //             type="password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //           />
    //         </div>
    //         <Button type="submit" label="Create an account" expanded />
    //       </form>
    //     </div>
    //   </div>
    //   <div className="bg-slate-900 flex justify-center items-center p-14">
    //     <div className=" text-white">
    //       <h1 className="text-xl font-semibold flex items-center gap-2 mb-8">
    //         <Logo className="text-white" />
    //       </h1>
    //       <h2 className="text-3xl font-bold mb-4">
    //         Become one of the world's top talent
    //       </h2>
    //       <p className="font-light text-xl mb-8">
    //         Millions of designers and agencies around the world showcase their
    //         portfolio work on Jobs - the home to the world’s best design and
    //         creative professionals.
    //       </p>
    //       <div className="flex items-center gap-7">
    //         <div className="flex">
    //           <Avatar src="https://i.pravatar.cc/150?img=1" />
    //           <Avatar src="https://i.pravatar.cc/150?img=2" />
    //           <Avatar src="https://i.pravatar.cc/150?img=3" />
    //           <Avatar src="https://i.pravatar.cc/150?img=4" />
    //         </div>
    //         <p className="font-semibold">
    //           <span className="font-bold text-orange-500">250,000+</span>{' '}
    //           engineers on the platform!
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default TalentSignUp;
