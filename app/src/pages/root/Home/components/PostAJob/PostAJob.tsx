import { Container, Section } from '../../../../../components/shared';
import Article from '../../../../../components/ui/Article/Article';
import Avatar from '../../../../../components/ui/Avatar/Avatar';

const PostAJob = () => {
  return (
    <Section>
      <Container>
        {/* <Heading
          title="Today Deals"
          subTitle="Unmissable Daily Deals Await: Shop Now and Save"
        /> */}

        <div className="grid grid-cols-2 gap-12">
          <div className="aspect-square flex items-center">
            <Article
              title="So Many People are Engaged all Over Africa"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia omnis, architecto tempore quae nam ipsa voluptates et quos, quam aliquid ratione saepe exercitationem asperiores itaque amet tenetur laudantium officia? Facere."
            />
          </div>
          <div className="aspect-square p-6">
            <div className="relative border border-dashed border-rose-400 w-full h-full rounded-full p-16">
              <div className=" bg-indigo-400 w-full h-full rounded-full p-12">
                <div className="relative bg-orange-50 w-full h-full rounded-full">
                  <Avatar
                    imageUrl="https://i.pravatar.cc/150?img=37"
                    className="absolute -left-3.5 bottom-1/4"
                  />
                  <Avatar
                    imageUrl="https://i.pravatar.cc/150?img=44"
                    className="absolute right-1/2 translate-x-1/2  -top-3.5"
                  />
                  <Avatar
                    imageUrl="https://i.pravatar.cc/150?img=51"
                    className="absolute -right-3.5 bottom-1/4"
                  />
                </div>
              </div>
              <Avatar
                imageUrl="https://i.pravatar.cc/150?img=7"
                className="absolute left-0 top-1/4"
              />
              <Avatar
                imageUrl="https://i.pravatar.cc/150?img=3"
                className="absolute right-1/2 translate-x-1/2  -top-3.5"
              />
              <Avatar
                imageUrl="https://i.pravatar.cc/150?img=1"
                className="absolute right-0 top-1/4"
              />
              <Avatar
                imageUrl="https://i.pravatar.cc/150?img=8"
                className="absolute right-0 bottom-1/4"
              />
              <Avatar
                imageUrl="https://i.pravatar.cc/150?img=13"
                className="absolute right-1/2 translate-x-1/2  -bottom-3.5"
              />
              <Avatar
                imageUrl="https://i.pravatar.cc/150?img=23"
                className="absolute left-0 bottom-1/4"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default PostAJob;
