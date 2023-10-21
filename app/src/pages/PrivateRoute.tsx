import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../context/auth-context';
import { Spinner } from '../components/ui';

type Props = {
  component: any;
  path: string;
  roles?: string[];
  exact?: boolean;
};

const PrivateRoute: React.FC<Props> = ({
  component: Component,
  roles = [],
  ...rest
}: Props) => {
  const { user, isLoading } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoading) return <Spinner />;
        if (user && (roles.length === 0 || roles.includes(user?.role)))
          return <Component {...rest} {...props} />;

        return (
          <Redirect
            to={{
              pathname: '/',
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
