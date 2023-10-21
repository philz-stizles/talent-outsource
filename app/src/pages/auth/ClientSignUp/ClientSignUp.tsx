import { useCallback, useState } from 'react';
import { Container } from '../../../components/shared';
import { Button, Logo } from '../../../components/ui';
import TeamMembers from './components/TeamMembers/TeamMembers';
import WhenToStart from './components/WhenToStart/WhenToStart';
import WhatSkills from './components/WhatSkills/WhatSkills';
import { ArrowLeft } from 'lucide-react';
import SignUpForm from './components/SignUpForm/SignUpForm';

enum Steps {
  WhatSkills,
  WhenToStart,
  TeamMembers,
  SignUp,
}

const SignUp = () => {
  const [step, setStep] = useState(Steps.WhatSkills);
  const [selectedSkills, setSelectedSkills] = useState();

  let content = null;

  const handleContinue = useCallback(() => {
    if (step !== Steps.SignUp) {
      setStep((prevState) => prevState + 1);
    }
  }, [step]);

  const handlePrevious = useCallback(() => {
    if (step !== Steps.WhatSkills) {
      setStep((prevState) => prevState - 1);
    }
  }, [step]);

  switch (step) {
    case Steps.WhatSkills:
      content = <WhatSkills />;
      break;
    case Steps.TeamMembers:
      content = <TeamMembers />;
      break;
    case Steps.WhenToStart:
      content = <WhenToStart />;
      break;
    case Steps.SignUp:
      content = <SignUpForm />;
      break;
    default:
      break;
  }

  return (
    <section className="h-full">
      <Container className="h-full flex flex-col">
        <div className="flex justify-between items-center py-8">
          <ArrowLeft onClick={handlePrevious} />
          <Logo />
          <div className="rounded-md px-3 py-2 bg-indigo-100 text-indigo-600">
            20% Completed
          </div>
        </div>
        <div className="flex-1">{content}</div>
        <div className="">
          <Button label="Continue" size="lg" onClick={handleContinue} />
        </div>
        <div className="py-12">
          <div className="relative rounded-full w-full h-4 bg-indigo-200 overflow-hidden">
            <span className="absolute rounded-full top-0 left-0 right-0 bottom-0 w-10 bg-indigo-700 "></span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SignUp;
