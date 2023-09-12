import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';


export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();

  return (
    <Box>
      {location.pathname !== '/' && (
          <NavLink to="/">Home</NavLink>
      )}

      {isLoggedIn && location.pathname !== '/contacts' && (
          <NavLink to="/contacts">Contacts</NavLink>
      )}
    </Box>
  );
};