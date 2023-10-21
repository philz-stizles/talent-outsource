import PRODUCTS from '../../../../../data/jobs';
import { useFetch } from '../../../../../hooks/use-fetch';
import { DealCard } from '../../../../../components/cards';
import { Product } from '../../../../../components/cards/DealCard';
import { Container, Section } from '../../../../../components/shared';
import { Heading } from '../../../../../components/ui';

const Testimonials = () => {
  const { data: products } = useFetch<Product[]>('', []);
  return (
    <Section>
      <Container>
        <Heading
          title="Today Deals"
          subTitle="Unmissable Daily Deals Await: Shop Now and Save"
        />
        <div className="grid grid-cols-2 gap-4">
          {products.slice(0, 2).map((item) => (
            <DealCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;
