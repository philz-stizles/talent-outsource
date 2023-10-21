import { Container } from '../../../../../components/shared';

const CallToAction = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12">
      <Container>
        <article className="flex justify-between items-center bg-slate-900 rounded-lg text-slate-50 p-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-1 bg-slate-300"></div>
              <h3 className="text-lg font-semibold text-indigo-500">
                Subscribe Now
              </h3>
            </div>
            <h2 className="text-4xl font-semibold mb-6">
              Subscribe to Our Newsletter
            </h2>
          </div>
          <figure className="w-4/12 rounded-lg overflow-hidden">
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

export default CallToAction;
