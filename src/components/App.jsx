import { refreshUser } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Layout } from './Layout';
import { Loader } from './Loader/Loader';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';


const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));
const LogInPage = lazy(() => import('pages/Login/Login'));
const RegisterPage = lazy(() => import('pages/Register/Register'));
const HomePage = lazy(() => import('pages/Home/Home')); 
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export default function AppPhoneBook() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const colors = {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  };
  const theme = extendTheme({ colors })


  return isRefreshing ? (
    <Loader />
  ) : (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LogInPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}
