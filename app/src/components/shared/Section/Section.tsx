import classNames from 'classnames';
import { PropsWithChildren } from 'react';

type Props = { id?: string; className?: string };

const Section = ({ children, id, className }: PropsWithChildren<Props>) => {
  return (
    <section id={id} className={classNames('pt-16 pb-32', className)}>
      {children}
    </section>
  );
};

export default Section;
