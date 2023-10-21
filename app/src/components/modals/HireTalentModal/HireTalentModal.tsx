import { useCallback, useMemo, useState } from 'react';
import Modal from '../Modal/Modal';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import WhatSkills from './components/WhatSkills';
import Location from './components/Location';
import Info from './components/Info';

const enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

type Props = {
  isOpen?: boolean;
  onClose: () => void;
};

const HireTalentModal: React.FC<Props> = ({ onClose, isOpen }) => {
  const [step, setStep] = useState(STEPS.CATEGORY);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: '',
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: '',
      price: 1,
      title: '',
      description: '',
    },
  });
  const history = useHistory();

  const category = watch('category');
  const location = watch('location');
  const guestCount = watch('guestCount');
  const roomCount = watch('roomCount');
  const bathroomCount = watch('bathroomCount');
  const imageSrc = watch('imageSrc');

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const backHandler = () => {
    setStep((prev) => prev - 1);
  };

  const nextHandler = () => {
    setStep((prev) => prev + 1);
  };

  const submitHandler: SubmitHandler<FieldValues> = useCallback(
    (data) => {
      if (step !== STEPS.PRICE) {
        return nextHandler();
      }

      setIsLoading(true);

      axios
        .post('/api/v1/auth/register-client', data)
        .then(() => {
          toast.success('Listing Created!');
          //   history.refresh();
          reset();
          setStep(STEPS.CATEGORY);
          onClose();
        })
        .catch(() => {
          toast.error('Something went wrong.');
        })
        .finally(() => {
          setIsLoading(false);
        });

      console.log(data);
    },
    [onClose, reset, step]
  );
  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return 'Create';
    }
    return 'Next';
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined;
    }
    return 'Back';
  }, [step]);

  let bodyContent: { [key: number]: any } = {
    0: <WhatSkills category={location} setCustomValue={setCustomValue} />,
    1: <Location location={location} setCustomValue={setCustomValue} />,
    2: (
      <Info
        roomCount={roomCount}
        bathroomCount={bathroomCount}
        guestCount={guestCount}
        setCustomValue={setCustomValue}
      />
    ),
  };

  // if (step === STEPS.LOCATION) {
  //   bodyContent = (
  //     <div className="flex flex-col gap-8">
  //       <Heading
  //         title="Which is your place located?"
  //         subTitle="Help guests find you!"
  //       />

  //       <CountrySelect
  //         value={location}
  //         onChange={(value) => setCustomValue('location', value)}
  //       />
  //       {/* <Map center={location?.latlng} /> */}
  //     </div>
  //   );
  // }

  // if (step === STEPS.IMAGES) {
  //   bodyContent = (
  //     <div className="flex flex-col gap-8">
  //       <Heading
  //         title="Add a photo of your place"
  //         subTitle="Show guests what your place looks like!"
  //       />
  //       <ImageUpload
  //         value={imageSrc}
  //         onChange={(value) => setCustomValue('imageSrc', value)}
  //       />
  //     </div>
  //   );
  // }

  // if (step === STEPS.DESCRIPTION) {
  //   bodyContent = (
  //     <div className="flex flex-col gap-4">
  //       <Heading
  //         title="How would you describe your place?"
  //         subTitle="Short and sweet works best!"
  //       />
  //       <Input
  //         id="title"
  //         label="Title"
  //         disabled={isLoading}
  //         register={register}
  //         errors={errors}
  //         required
  //       />
  //       <hr />
  //       <Input
  //         id="description"
  //         label="Description"
  //         disabled={isLoading}
  //         register={register}
  //         errors={errors}
  //         required
  //       />
  //     </div>
  //   );
  // }

  // if (step === STEPS.PRICE) {
  //   bodyContent = (
  //     <div className="flex flex-col gap-4">
  //       <Heading
  //         title="Now, set your price?"
  //         subTitle="How much will you charge per night"
  //       />
  //       <Input
  //         id="price"
  //         label="Price"
  //         disabled={isLoading}
  //         register={register}
  //         errors={errors}
  //         required
  //       />
  //     </div>
  //   );
  // }

  return (
    <Modal
      title="Hire Talent"
      body={bodyContent[step]}
      disabled={isLoading}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      onSecondaryAction={step === STEPS.CATEGORY ? undefined : backHandler}
      onSubmit={handleSubmit(submitHandler)}
      isOpen={isOpen}
      onClose={onClose}
    />
  );
};

export default HireTalentModal;
