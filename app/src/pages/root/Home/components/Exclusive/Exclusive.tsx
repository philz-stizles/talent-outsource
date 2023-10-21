import { ExclusiveCard } from '../../../../../components/cards';
import { Container, Section } from '../../../../../components/shared';
import { Heading } from '../../../../../components/ui';

const Exclusive = () => {
  return (
    <Section>
      <Heading
        className="w-full text-center "
        title="Blog"
        subTitle="Follow for Updates and Exclusive Offers"
      />
      <div className="grid grid-flow-col gap-4 overflow-x-auto no-scrollbar">
        {[
          { id: '1', name: '', imageUrl: '/images/home-1622401_1280.jpg' },
          { id: '2', name: '', imageUrl: '/images/home-1622401_1280.jpg' },
          {
            id: '3',
            name: '',
            imageUrl: '/images/living-room-1835923_1280.jpg',
          },
          { id: '4', name: '', imageUrl: '/images/office-730681_1280.jpg' },
          { id: '5', name: '', imageUrl: '/images/home-1622401_1280.jpg' },
        ].map((item) => (
          <ExclusiveCard key={item.id} item={item} />
        ))}
      </div>
    </Section>
  );
};

export default Exclusive;
