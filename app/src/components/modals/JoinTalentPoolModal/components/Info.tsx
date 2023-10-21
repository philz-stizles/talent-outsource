import { Counter } from "../../../inputs";
import { Heading } from "../../../ui";


type Props = {
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  setCustomValue: (id: string, value: any) => void;
};

const Info = ({
  guestCount,
  roomCount,
  bathroomCount,
  setCustomValue,
}: Props) => {
  return (
    <div className="flex flex-col gap-8">
      <Heading
        title="Share some basics about your place"
        subTitle="What amenities do you have?"
      />
      <Counter
        title="Number of guests"
        subTitle="How many guests?"
        value={guestCount}
        onChange={(value) => setCustomValue('guestCount', value)}
      />
      <hr />
      <Counter
        title="Rooms"
        subTitle="How many rooms do you have?"
        value={roomCount}
        onChange={(value) => setCustomValue('roomCount', value)}
      />
      <hr />
      <Counter
        title="Bathrooms"
        subTitle="How many bathrooms do you have?"
        value={bathroomCount}
        onChange={(value) => setCustomValue('bathroomCount', value)}
      />
    </div>
  );
};

export default Info;
