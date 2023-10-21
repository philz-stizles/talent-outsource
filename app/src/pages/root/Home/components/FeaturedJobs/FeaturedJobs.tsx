import { ArrowUpRight } from 'lucide-react';
import JOBS from '../../../../../data/jobs';
import { useFetch } from '../../../../../hooks/use-fetch';
import { Job } from '../../../../../components/cards/JobCard';
import { Container, Section } from '../../../../../components/shared';
import { Button, Heading } from '../../../../../components/ui';
import { JobCard } from '../../../../../components/cards';

const BestSellers = () => {
  const { data: products } = useFetch<Job[]>('', JOBS);

  return (
    <Section className="bg-indigo-50">
      <Container className="overflow-hidden">
        <Heading
          title="Jobs"
          subTitle="Explore Featured Jobs"
          className="text-center justify-center"
        />
        <div className="flex items-center gap-4 py-8"></div>
        <div className="grid grid-cols-3 gap-4 mb-12">
          {products.map((item) => (
            <JobCard key={item.id} item={item} />
          ))}
        </div>
        <div className="flex justify-center">
          <Button label="View Collections" iconRight={ArrowUpRight} />
        </div>
      </Container>
    </Section>
  );
};

export default BestSellers;
