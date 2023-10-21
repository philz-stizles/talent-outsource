import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import { User } from '../types';
import { useHistory, useLocation } from 'react-router-dom';

const AUTH_LOGIN = 'AUTH LOGIN';
const AUTH_LOGOUT = 'AUTH LOGOUT';

type AuthState = {
  user: null | User;
  isLoading: boolean;
};
type AuthAction =
  | { type: typeof AUTH_LOGIN; payload: User }
  | { type: typeof AUTH_LOGOUT };

const authReducer = (state: AuthState, action: AuthAction) => {
  const { type } = action;
  switch (type) {
    case AUTH_LOGIN:
      return { ...state, user: action.payload, isLoading: false };
    case AUTH_LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export type UserData = { tokens: any; user: User }

type AuthContextType = AuthState & {
  login: (userData: UserData) => void;
  logout: () => void;
};

const initialState = {
  user: null,
  isLoading: true
};

const defaultValue = {
  user: null,
  login: (userData: UserData) => {},
  logout: () => {},
  isLoading: true
};

const AuthContext = createContext<AuthContextType>(defaultValue);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const history = useHistory();

  const { pathname } = useLocation();

  useEffect(() => {
    const userStore = localStorage.getItem('talent-outsource:user');
    if (userStore) {
      const userData: UserData = JSON.parse(userStore);
      dispatch({ type: AUTH_LOGIN, payload: userData.user });
    } else {
      dispatch({ type: AUTH_LOGOUT });
    }
  }, [history, pathname]);

  const loginHandler = useCallback(
    (data: UserData) => {
      dispatch({ type: AUTH_LOGIN, payload: data.user });

      localStorage.setItem('talent-outsource:user', JSON.stringify(data));

      switch (data.user.role) {
        case 'admin':
          history.push('/admin');
          break;
        case 'company':
          history.push('/companies');
          break;
        default:
          history.push('/talent');
          break;
      }
    },
    [history]
  );

  const logoutHandler = useCallback(() => {
    dispatch({ type: AUTH_LOGOUT });
    localStorage.removeItem('talent-outsource:user');
    history.push('/signin');
  }, [history]);

  const value = useMemo(
    () => ({ ...state, login: loginHandler, logout: logoutHandler }),
    [loginHandler, logoutHandler, state]
  );   

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
