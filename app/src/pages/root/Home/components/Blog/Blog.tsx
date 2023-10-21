import BLOGS from '../../../../../data/blogs';
import { useFetch } from '../../../../../hooks/use-fetch';
import BlogCard, { Blog } from '../../../../../components/cards/BlogCard';
import { Container, Section } from '../../../../../components/shared';
import { Heading } from '../../../../../components/ui';

const Blogs = () => {
  const { data: blogs } = useFetch<Blog[]>('', BLOGS);
  return (
    <Section>
      <Container>
        <Heading title="Blog" subTitle="Our Latest Blog & News" />
        <div className="grid grid-cols-3 gap-5">
          {blogs.slice(0).map((item) => (
            <BlogCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Blogs;
