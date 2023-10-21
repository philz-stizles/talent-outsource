import Button from '../Button/Button';
import Heading from '../Heading/Heading';

type Props = {
  title: string;
  description: string;
};

const Article = ({ title, description }: Props) => {
  return (
    <article className=' pr-7'>
      <Heading subTitle={title} />
      <div className='mb-7 text-gray-800 text-base'>{description}</div>
      <Button label="Post a Job" />
    </article>
  );
};

export default Article;
