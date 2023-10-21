import CATEGORIES from '../../../../../data/categories';
import { useFetch } from '../../../../../hooks/use-fetch';
import { CategoryCard } from '../../../../../components/cards';
import { Category } from '../../../../../components/cards/CategoryCard';
import { Container, Section } from '../../../../../components/shared';
import { Heading } from '../../../../../components/ui';

const Categories = () => {
  const {
    data: categories,
    isLoading,
    error,
  } = useFetch<Category[]>('', CATEGORIES);
  return (
    <Section id="categories" className="bg-slate-50">
      <Container className="flex flex-col">
        <Heading
          title="Categories"
          subTitle="Discover Our Unique Collection of Exclusive Categories"
          className="text-center self-center"
        />
        <div className="grid grid-cols-4 gap-4 py-4">
          {categories.slice(0, 4).map((item, i) => (
            <CategoryCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Categories;
