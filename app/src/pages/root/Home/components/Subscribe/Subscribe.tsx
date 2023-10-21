import { Container, Section } from '../../../../../components/shared';
import { Heading } from '../../../../../components/ui';

const Subscribe = () => {
  return (
    <Section className="bg-slate-50">
      <Container>
        <Heading
          title="Our Newsletter"
          subTitle="Subscribe to Our Newsletter to Get Updates to Our Latest Furniture"
        />
        <p className="">
          Get 20% offer on your first order just by subscribing to our
          newsletter
        </p>
      </Container>
    </Section>
  );
};

export default Subscribe;
