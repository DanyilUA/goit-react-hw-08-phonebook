import { Box, Flex, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { NavLink, useLocation } from 'react-router-dom';


export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();

  return (
    <Flex>
      <Box mr={5}>
        <NavLink
          as={Text}
          to="/"
          color={location.pathname === '/' ? 'teal.500' : 'gray.500'}
          _hover={{ color: 'teal.600', textDecoration: 'underline' }}
          fontWeight={500}
          fontSize={20}
        >
          <Text
            _hover={{ color: 'teal.600', textDecoration: 'underline' }}
            fontWeight={700}
            fontSize={20}
          >
            Home
          </Text>
        </NavLink>
      </Box>

      {isLoggedIn && location.pathname !== '/contacts' && (
        <Box>
          <NavLink as={Text} to="/contacts">
            <Text
              _hover={{ color: 'teal.600', textDecoration: 'underline' }}
              fontWeight={700}
              fontSize={20}
            >
              Contacts
            </Text>
          </NavLink>
        </Box>
      )}
    </Flex>
  );
};
