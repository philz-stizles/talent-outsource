import { Container, Section } from '../../../../../components/shared';
import { useFetch } from '../../../../../hooks/use-fetch';
import Heading from '../../../../../components/ui/Heading/Heading';
import { FeatureCard } from '../../../../../components/cards';
import { Feature } from '../../../../../components/cards/FeatureCard';
import { Component, Gem, Truck, Wallet2 } from 'lucide-react';
import { Button } from '../../../../../components/ui';

const Features = () => {
  const {
    data: features,
    isLoading,
    error,
  } = useFetch<Feature[]>('', [
    {
      id: '1',
      title: 'Software Developer',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      icon: Wallet2,
    },
    {
      id: '2',
      title: '  Product Management',
      description: 'Apartment booking management platform for landlords.',
      icon: Truck,
    },
    {
      id: '3',
      title: 'Finance & Account',
      description: 'Apartment booking management platform for landlords.',
      icon: Component,
    },
    {
      id: '4',
      title: 'Human Resources',
      description: 'Apartment booking management platform for landlords.',
      icon: Gem,
    },
  ]);
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-32">
      <Container>
        <article className="grid grid-cols-2 gap-20 items-center">
          <div className="grid grid-cols-2 gap-4">
            {features.map((item) => (
              <FeatureCard key={item.id} item={item} />
            ))}
          </div>
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-1 bg-slate-300"></div>
              <h3 className="text-lg font-semibold text-indigo-500">
                Our Services
              </h3>
            </div>
            <h2 className="text-4xl font-semibold mb-6">
              We Can Help You Solve Your Problems Through Our Services.
            </h2>
            <p className="text-lg font-light text-slate-700 mb-12">
              Dolor sit amet, consectetur adipisicing elit. Ex commodi ipsum sed
              debitis eum velit labore rerum eaque excepturi ut, unde dolorem
              ratione quasi temporibus asperiores mollitia suscipit praesentium
              aperiam architecto esse enim eius voluptates dolores.
            </p>
            <Button variant="outlined" size="lg" label="Explore Services" />
          </div>
        </article>
      </Container>
    </section>
    // <Section id="features">
    //   <Container className="">
    //     <Heading
    //       title="Features"
    //       subTitle="Browse by Job Categories"
    //       className="text-center justify-center"
    //     />
    //     <div className="grid grid-cols-4 gap-4 py-4">
    //       {features.map((item) => (
    //         <FeatureCard key={item.id} item={item} />
    //       ))}
    //     </div>
    //   </Container>
    // </Section>
  );
};

export default Features;
