import { Container, Section } from '../../../../../components/shared';
import { Button } from '../../../../../components/ui';

const About = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-32">
      <Container>
        <article className="grid grid-cols-2 gap-20">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-1 bg-slate-300"></div>
              <h3 className="text-lg font-semibold text-indigo-500">
                About TalentSource
              </h3>
            </div>
            <h2 className="text-4xl font-semibold mb-6">
              Consectetur amet adipisicing elit fugiat atque facilis velit
              labore eaque excepturi.
            </h2>
            <p className="text-lg text-slate-500 mb-12">
              Dolor sit amet, consectetur adipisicing elit. Ex commodi ipsum sed
              debitis eum velit labore rerum eaque excepturi ut, unde dolorem
              ratione quasi temporibus asperiores mollitia suscipit praesentium
              aperiam architecto esse enim eius voluptates dolores.
            </p>
            <Button variant="outlined" size="lg" label="Learn More" />
          </div>
          <figure className="border-2 h-fit border-slate-300 rounded-lg overflow-hidden">
            <img
              className="w-full h-auto object-cover"
              src="/images/entrepreneur.jpg"
              alt="figure"
            />
          </figure>
        </article>
      </Container>
    </section>
  );
};

export default About;
