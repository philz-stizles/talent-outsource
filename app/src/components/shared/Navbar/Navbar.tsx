import { useCallback, useEffect, useState } from 'react';
import Container from '../Container/Container';
import { NavLink, useHistory } from 'react-router-dom';
import { Button, IconButton, Logo } from '../../ui';
import classNames from 'classnames';
import { createPortal } from 'react-dom';
import HireTalentModal from '../../modals/HireTalentModal/HireTalentModal';
import { useAuth } from '../../../context/auth-context';
import { LogOut } from 'lucide-react';

const Navbar = () => {
  const [colorChange, setColorChange] = useState(false);
  const history = useHistory();
  const { user, logout } = useAuth();

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
        setColorChange(true);
      } else {
        setColorChange(false);
      }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return () => {
      window.removeEventListener('scroll', changeNavbarColor);
    };
  }, []);

  const handleNavigateToSignIn = useCallback(() => {
    history.push('/signin');
  }, [history]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-10 transition ${
        colorChange
          ? 'py-3 bg-white app-shadow-b text-black'
          : 'py-5 text-white'
      }`}
    >
      <Container className="flex items-center gap-6">
        <Logo />
        <nav className="flex-1 lg:flex hidden justify-center">
          <ul className="flex items-center gap-6">
            <NavItem href="/" label="Home" />
            <NavItem href="#shops" label="About Us" />
            <NavItem href="#features" label="Jobs" />
            <NavItem href="#testimonials" label="Blog" />
            <NavItem href="#contact-us" label="Contact Us" />
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <IconButton icon={LogOut} onClick={() => logout()} />
          ) : (
            <>
              <Button
                variant="outlined"
                label="Join the Talent Pool"
                onClick={() => history.push('/talent/signup')}
              />
              {/* <Button
            label="Hire Talent"
            onClick={() => history.push('/client/signup')}
          /> */}
              <HireTalent />
              <Button
                variant="flat"
                label="Sign In"
                onClick={handleNavigateToSignIn}
              />
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

type NavItemProps = {
  label: string;
  href: string;
  className?: string;
};

const NavItem = ({ label, href, className }: NavItemProps) => {
  return (
    <li className={classNames('text-sm', className)}>
      <NavLink to={href}>{label}</NavLink>
    </li>
  );
};

const HireTalent = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button label="Hire Talent" onClick={() => setShowModal(true)} />
      {showModal &&
        createPortal(
          <HireTalentModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          />,
          document.getElementById('modal')!
        )}
    </>
  );
};

export default Navbar;
