import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from 'lucide-react';
import { Container } from '..';
import { Logo } from '../../ui';

const Footer = () => {
  return (
    <footer className="bg-indigo-700 text-indigo-50 text-base">
      <Container>
        <div className="grid grid-cols-6 gap-10 py-16">
          <div className="col-span-2">
            <Logo className="mb-4" />
            <p className="text-base font-light mb-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              excepturi pariatur, cumque eos incidunt delectus dignissimos odio
              perferendis vero.
            </p>
            <div className="flex items-center gap-3 py-3">
              <div className="rounded-lg bg-indigo-200 text-indigo-700 p-1">
                <Facebook size={20}  />
              </div>
              <div className="rounded-lg bg-indigo-200 text-indigo-700 p-1">
                <Twitter size={20} />
              </div>
              <div className="rounded-lg bg-indigo-200 text-indigo-700 p-1">
                <Youtube size={20} />
              </div>
              <div className="rounded-lg bg-indigo-200 text-indigo-700 p-1">
                <Instagram size={20} />
              </div>
            </div>
          </div>
          <FooterList
            title="Products"
            items={[
              'Find a Job',
              'Find Companies',
              "I'm a Company",
              'Accounts',
            ]}
          />
          <FooterList
            title="Company"
            items={['About Us', 'Blog', 'Careers', 'Our Team']}
          />

          <FooterList
            title="Support"
            items={[
              'Help Center',
              'Terms of Service',
              'Legal',
              'Privacy Policy',
            ]}
          />
          <FooterList
            title="Downloads"
            items={[
              'Help Center',
              'Terms of Service',
              'Legal',
              'Privacy Policy',
            ]}
          />
        </div>
        <div className="border-t border-slate-600 flex justify-center items-center py-8">
          <p>
            Copyright &copy; | {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

const FooterList = ({ title, items }: { title?: string; items: string[] }) => {
  return (
    <div>
      <h3 className="text-lg mb-4 font-medium">{title}</h3>
      <ul className="flex flex-col gap-2.5">
        {items.map((item, i) => (
          <li key={i} className="font-light">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
