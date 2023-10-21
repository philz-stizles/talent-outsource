import {
  About,
  CallToAction,
  FeaturedJobs,
  Features,
  PostAJob,
  Testimonials,
} from './components';
import { Footer, Header } from '../../../components/shared';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Features />
        <FeaturedJobs />
        <PostAJob />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default Home;
