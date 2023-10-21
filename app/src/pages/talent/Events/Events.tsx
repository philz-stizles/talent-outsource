import { useAuth } from '../../../context/auth-context';

const Events = () => {
  const { logout } = useAuth();

  return <main className="flex-1 flex flex-col"></main>;
};

export default Events;
